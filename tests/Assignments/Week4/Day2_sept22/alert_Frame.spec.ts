
import {test,expect} from "@playwright/test"

test('Alerts and Frames',async({page})=>{

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    const frame1=page.frameLocator("[id='iframeResult']")

    page.on('dialog', async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })

    await frame1.getByRole('button',{name:'Try it'}).click()

    await expect(frame1.getByText('You pressed OK!')).toBeVisible()




})