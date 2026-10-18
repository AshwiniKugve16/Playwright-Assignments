
import { test, chromium, webkit } from '@playwright/test';

test('Launch RedBus and Flipkart', async () => {

    // Edge → RedBus
    const edge = await chromium.launch({
        channel: 'msedge'
    });

    const redbusPage = await edge.newPage();
    await redbusPage.goto('https://www.redbus.in');

    console.log(await redbusPage.title());
    console.log(redbusPage.url());

    await edge.close();


    // WebKit → Flipkart
    const webkitBrowser = await webkit.launch();

    const flipkartPage = await webkitBrowser.newPage();
    await flipkartPage.goto('https://www.flipkart.com');

    console.log(await flipkartPage.title());
    console.log(flipkartPage.url());

    await webkitBrowser.close();
});