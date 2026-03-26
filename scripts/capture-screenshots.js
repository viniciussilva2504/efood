const puppeteer = require("puppeteer");
const path = require("path");

const LIVE_URL = "https://efood-parte-2.vercel.app";
const OUTPUT_DIR = path.join(__dirname, "..", "docs");

async function capture() {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1280, height: 800 },
  });

  const page = await browser.newPage();

  // 1. Home — Lista de Restaurantes
  console.log("📸 Capturando Home...");
  await page.goto(LIVE_URL, { waitUntil: "networkidle2", timeout: 30000 });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "screenshot-home.png"),
    fullPage: false,
  });
  console.log("   ✅ Home salva");

  // 2. Perfil — Cardápio do Restaurante (clica no primeiro restaurante)
  console.log("📸 Capturando Perfil...");
  await page.evaluate(() => {
    const link = document.querySelector('a[href*="perfil"]');
    if (link) link.click();
  });
  await page
    .waitForNavigation({ waitUntil: "networkidle2", timeout: 15000 })
    .catch(() => {});
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "screenshot-perfil.png"),
    fullPage: false,
  });
  console.log("   ✅ Perfil salva");

  // 3. Modal — Detalhe do produto (clica no primeiro botão "Adicionar ao carrinho")
  console.log("📸 Capturando Modal do Produto...");
  await page.evaluate(() => {
    const btn = document.querySelector("button");
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "screenshot-checkout.png"),
    fullPage: false,
  });
  console.log("   ✅ Modal/Checkout salva");

  await browser.close();
  console.log("\n🎉 Screenshots salvas em /docs/");
}

capture().catch((err) => {
  console.error("Erro:", err.message);
  process.exit(1);
});
