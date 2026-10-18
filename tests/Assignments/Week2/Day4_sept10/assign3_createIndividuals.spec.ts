
import {test, expect} from "@playwright/test"

test('Create Individuals', async({page})=>{

    await page.goto('https://orgfarm-956f4ac851-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')

    await page.locator('#username').fill('ashwinikugve16.9869d7df6105@agentforce.com')

    await page.locator('#Login').click()

    await page.locator('#password').fill('Testleaf@123')

    await page.locator('#Login').click()

    await page.pause()

    await page.locator("button[title='App Launcher']").click()

    await page.locator("button[aria-label='View All Applications']").click()

    await page.locator("a[data-label='Individuals']").click();

    await page
    .locator('one-app-nav-bar-menu-button')
    .filter({ hasText: 'Individuals' })
    .locator('a[role="button"]')
    .click();

    await page.getByText('New Individual', { exact: true }).click();

    const name= 'Kugve'

    await page.locator("input[class*='lastName']").fill(name);

    await page.locator("button[title='Save']").click()

    await expect(
    page.getByRole('region', { name: 'Highlights panel header' })
    .getByText(name, { exact: true })
    ).toBeVisible();


})