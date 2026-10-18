
import {test} from "@playwright/test"

test('Alerts', async({page})=>{

    await page.goto('https://www.leafground.com/alert.xhtml')

    page.on('dialog',async dialog=>{
        await dialog.accept('playwright')
    })

    await page.locator("(//span[text()='Show'])[5]").click()
    

})