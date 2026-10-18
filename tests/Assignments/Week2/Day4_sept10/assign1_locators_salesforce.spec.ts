
import {test} from "@playwright/test"

test('Locators', async({page})=>{

    await page.goto('https://orgfarm-956f4ac851-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')

    await page.locator('#username').fill('ashwinikugve16.9869d7df6105@agentforce.com')

    await page.locator('#Login').click()

    await page.locator('#password').fill('Testleaf@123')

    await page.locator('#Login').click()

    await page.pause()

    await page.locator("div[class='appLauncher slds-context-bar__icon-action']").click()

    await page.locator("button[aria-label='View All Applications']").click()

    await page.locator("//p[text()='Sales']").click()

    await page.locator("a[title='Leads']").click()

    await page.locator("button[name='New']").click()

    await page.locator("button[name='salutation']").click();

    await page.getByText("Mrs.", { exact: true }).click();

    await page.locator("input[name='lastName']").fill('K R')

    await page.locator("input[name='Company']").fill('Wipro')

    await page.locator("button[name='SaveEdit']").click()


})