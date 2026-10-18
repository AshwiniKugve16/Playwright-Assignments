
import {test} from "@playwright/test"


test('auth file to skip the login', async ({page}) => {


//let url:string | undefined="https://login.salesforce.com"


await page.goto('https://login.salesforce.com/')
//await page.goto(process.env.url as string)


await page.locator('#username').fill('ashwinikugve16.9869d7df6105@agentforce.com')


await page.locator('#Login').click()


await page.locator('#password').fill('Testleaf@123')


await page.locator('#Login').click()


await page.waitForTimeout(20000)


await page.context().storageState({path:'Data/sflogin.json'})
    
})

