import { chromium } from 'playwright';

const BASE_URL = 'https://listinha-puce.vercel.app/';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  await page.fill('#login-email', 'teste@gmail.com');
  await page.fill('#login-pwd', 'Teste123#');

  // Take screenshot before clicking
  await page.screenshot({ path: 'screenshots/debug-before-click.png' });

  await page.click('#auth-login .auth-btn');
  await page.waitForTimeout(4000);

  // Check for error message
  const error = await page.$eval('#login-error', el => el.textContent).catch(() => 'no error element');
  console.log('Erro visível:', error);

  await page.screenshot({ path: 'screenshots/debug-after-click.png' });

  // Keep open so we can see
  await page.waitForTimeout(5000);
  await browser.close();
})();
