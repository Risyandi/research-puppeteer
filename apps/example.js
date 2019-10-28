/**
 * example puppeteer to screenshoot full a pages of sites,
 * and save on the path previously have been set.
 */

const puppeteer = require('puppeteer');
console.log(puppeteer, ":value of puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(browser, ":value of browser");
    console.log(page, ":value of page");
    
    await page.goto('https://opini.id');
    await page.screenshot({
        path: './screenshot/example-puppeteer-full-v2.png',
        fullPage: true
    });
    
    await browser.close();
})();