const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build
const PUBLIC_DIR = path.join(__dirname, "public");
if (fs.existsSync(PUBLIC_DIR)) {
  app.use(express.static(PUBLIC_DIR));
}

const DATA_FILE = "./sales.json";
const HOTMART_SECRET = process.env.HOTMART_SECRET || "tu_secret_aqui";

function loadSales() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); }
  catch { return []; }
}

function saveSales(sales) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(sales, null, 2));
}

// Verificar firma de Hotmart
function verifyHotmart(req) {
  const signature = req.headers["x-hotmart-hottok"];
  if (!signature) return false;
  const expected = crypto
    .createHmac("sha1", HOTMART_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");
  return signature === expected;
}

// Webhook — Hotmart llama a esta URL cuando hay una venta
app.post("/webhook/hotmart", (req, res) => {
  // Descomenta la siguiente línea cuando tengas el secret real de Hotmart:
  // if (!verifyHotmart(req)) return res.status(401).json({ error: "Unauthorized" });

  const event = req.body;
  const type = event?.event;

  // Solo registrar compras completadas
  if (type !== "PURCHASE_COMPLETE" && type !== "PURCHASE_APPROVED") {
    return res.status(200).json({ received: true, ignored: true });
  }

  const purchase = event?.data?.purchase;
  const product = event?.data?.product;
  const buyer = event?.data?.buyer;

  const sale = {
    id: purchase?.transaction || Date.now().toString(),
    date: new Date().toISOString(),
    status: type,
    product: product?.name || "Mecánica de Motos VIP",
    price: purchase?.price?.value || 0,
    currency: purchase?.price?.currency_value || "USD",
    commission: purchase?.commission?.value || 0,
    buyerCountry: buyer?.address?.country || "N/A",
    buyerName: buyer?.name || "Anónimo"
  };

  const sales = loadSales();
  // Evitar duplicados
  if (!sales.find(s => s.id === sale.id)) {
    sales.push(sale);
    saveSales(sales);
    console.log(`[+] Nueva venta: ${sale.id} — ${sale.currency} ${sale.price}`);
  }

  res.status(200).json({ received: true });
});

// API — el dashboard consulta esto para obtener las ventas
app.get("/api/sales", (req, res) => {
  const sales = loadSales();
  const totalRevenue = sales.reduce((sum, s) => sum + (s.price || 0), 0);
  const totalCommission = sales.reduce((sum, s) => sum + (s.commission || 0), 0);

  res.json({
    count: sales.length,
    totalRevenue: +totalRevenue.toFixed(2),
    totalCommission: +totalCommission.toFixed(2),
    sales: sales.sort((a, b) => new Date(b.date) - new Date(a.date))
  });
});

// Health check (only if no React build)
app.get("/", (req, res) => {
  if (fs.existsSync(path.join(PUBLIC_DIR, "index.html"))) {
    res.sendFile(path.join(PUBLIC_DIR, "index.html"));
  } else {
    res.json({ status: "ok", message: "Hotmart Webhook Server activo" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));