import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const BASE_URL = 'https://listinha-puce.vercel.app/';
const EMAIL = 'teste@gmail.com';
const PASSWORD = 'Teste123#';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();

  console.log('🌐 Abrindo o app...');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  console.log('🔑 Preenchendo credenciais...');
  await page.fill('#login-email', EMAIL);
  await page.fill('#login-pwd', PASSWORD);

  // Click login — may navigate (signInWithRedirect) or stay (signInWithPopup/inline)
  console.log('🔑 Clicando Entrar...');
  await Promise.all([
    page.waitForLoadState('networkidle').catch(() => {}),
    page.click('#auth-login .auth-btn'),
  ]);

  // Wait up to 15s for auth screen to disappear
  console.log('⏳ Aguardando auth...');
  try {
    await page.waitForSelector('.auth-screen.active', { state: 'hidden', timeout: 15_000 });
  } catch {
    // Check if there's an error message shown
    const errMsg = await page.$eval('#login-error, .auth-error', el => el.textContent.trim()).catch(() => '');
    if (errMsg) {
      console.error('❌ Erro de login:', errMsg);
    } else {
      // Take debug screenshot
      await page.screenshot({ path: path.join(outputDir, 'debug-login-state.png') });
      console.log('📸 Screenshot do estado atual salvo em debug-login-state.png');

      // Print what's visible on screen
      const visible = await page.evaluate(() => document.body.innerText.slice(0, 300));
      console.log('Conteúdo visível:\n', visible);
    }
    await browser.close();
    return;
  }

  await page.waitForTimeout(2000);
  console.log('✅ Logado! Iniciando screenshots...\n');

  // Use switchNav JS function directly — more reliable than clicking hidden nav items
  async function nav(screen) {
    await page.evaluate(s => window.switchNav(s), screen);
    await page.waitForTimeout(1500);
  }

  // 1. Lista de compras
  await nav('lista');
  await page.screenshot({ path: path.join(outputDir, '01-lista-compras.png') });
  console.log('✓ 1. Lista de compras');

  // 2. Adicionar item — type in "O que falta?" input to show suggestions
  try {
    const input = page.locator('input').filter({ hasAttribute: 'placeholder' }).first();
    if (await input.isVisible({ timeout: 2000 })) {
      await input.click();
      await input.type('Arroz');
      await page.waitForTimeout(1200);
    }
  } catch {}
  await page.screenshot({ path: path.join(outputDir, '02-adicionar-item.png') });
  console.log('✓ 2. Adicionar item');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(600);

  // 3. Despensa
  await nav('despensa');
  await page.screenshot({ path: path.join(outputDir, '03-despensa.png') });
  console.log('✓ 3. Despensa');

  // 4. Receitas
  await nav('receitas');
  await page.screenshot({ path: path.join(outputDir, '04-receitas.png') });
  console.log('✓ 4. Receitas');

  // 5. Plano semanal
  await nav('plano');
  await page.screenshot({ path: path.join(outputDir, '05-plano-semanal.png') });
  console.log('✓ 5. Plano semanal');

  // 6. Mais / Perfil
  await nav('mais');
  await page.screenshot({ path: path.join(outputDir, '06-mais.png') });
  console.log('✓ 6. Mais / Perfil');

  await browser.close();
  console.log('\n🎉 Pronto! Screenshots em:', outputDir);
})();
