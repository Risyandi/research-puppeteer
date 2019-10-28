/**
 * example puppeteer to screenshoot full a pages of sites,
 * and save on the path previously have been set.
 */

const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://opini.id');
    await page.screenshot({
        path: 'example-puppeteer-full.png',
        fullPage: true
    });
    await browser.close();
})();