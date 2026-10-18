
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

    await page.locator("a[data-label='Individuals']").click()

    await page.locator(".slds-input").fill('K R')

    await page.locator(".slds-input").press("Enter");

    const row = page.locator("tr").filter({
    hasText: "K R"
});

await row.getByRole("button", { name: "Show Actions" }).click();

await page.locator('a[role="menuitem"][title="Edit"]:visible').click();

await page.getByLabel('Salutation').click();

await page.locator('a[role="option"][title="Mr."]').click();

const firstName = "Appi";

await page.locator(".firstName").fill(firstName);

await page.locator('button[title="Save"]').click();

const updatedRow = page.locator('tr').filter({
    hasText: `${firstName} K R`
});

await expect(updatedRow).toBeVisible();
    
})
