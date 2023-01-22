const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('https://app-staging.youshd.com');

  await page.type('input[name="otp"]', '123456');

  await page.click('button[type="submit"]');

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  const url = await page.url();

  if (url === 'https://app-staging.youshd.com/dashboard') {
    console.log('Successful: welcome to the dashboard page.');
  } else {
    console.log('Failed : URL does not match');
  }

  await browser.close();
})();
