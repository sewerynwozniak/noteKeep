const puppeteer = require('puppeteer');

(async () => {
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless:false, sloMo:5000});
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/public/index.html');
  
  await page.waitForSelector('.form__title');
  await page.click('.form__body');
  await page.type('.form__title', 'Testowy tytuł notatki');
  await page.type('.form__body', 'Notatka testowa');
  await page.click('.form__btn--add');
  await page.screenshot({ path: 'puppeteer-screenshot.png' });
  await browser.close();
})();