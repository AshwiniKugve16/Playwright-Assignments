
import {test, expect} from "@playwright/test"

test.use(
    {
       storageState:'Data/sflogin.json' 
    }
) 


test('auth file to skip the login', async ({page}) => {


//await page.goto("https://login.salesforce.com/")
await page.goto("https://orgfarm-956f4ac851-dev-ed.develop.lightning.force.com/lightning/page/home")



await page.waitForLoadState('domcontentloaded')


console.log(await page.title());

await page.locator("button[title='App Launcher']").click()

await page.locator("button[aria-label='View All Applications']").click()

await page.getByRole('combobox').fill('Marketing')
//await page.locator("input[placeholder='Search apps or items...']").fill('Marketing')

await page.locator("div[data-name='Marketing CRM Classic']").click()

await page.locator("a[title='Leads']").click()

await page.locator("button[name='New']").click()

await page.getByRole('combobox', { name: 'Salutation' }).click();

await page.getByText('Mrs.', { exact: true }).click();

await page.locator("input[name='firstName']").fill('Sonia')

await page.locator("input[name='lastName']").fill('M')

await page.getByRole('textbox', { name: 'Company' }).fill('ABC');

await page.locator("button[name='SaveEdit']").click()

await page.getByRole('button', { name: 'Show more actions' }).click()

await page.getByRole('menuitem', { name: 'Convert' }).click()

await page.getByText('Create New Opportunity', { exact: true }).click();

await page.getByLabel('Opportunity Name').fill('Flipkart');

await page.getByRole('button', { name: 'Convert' }).click()

await expect(
  page.getByText('Your lead has been converted', { exact: true })
).toBeVisible();

await page.getByRole('button', { name: 'Go to Leads' }).click();

await page.getByRole('searchbox', { name: 'Search...' }).fill('Sonia M')


})