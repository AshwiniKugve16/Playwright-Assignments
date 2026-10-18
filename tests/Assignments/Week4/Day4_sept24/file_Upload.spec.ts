
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

await page.locator("button[title='App Launcher']").click()

await page.locator("button[aria-label='View All Applications']").click()

await page.getByRole('combobox').fill('Accounts')

await page.locator("[data-label='Accounts']").click()

await page.locator("a[title='New']").click()

await page.getByRole('textbox',{name:'Account Name'}).fill('XYZ')

await page.locator("//button[@aria-label='Rating']").click()

await page.getByText('Warm', { exact: true }).click()

//await page.locator("//button[@aria-label='Type']").click()
await page.getByRole('combobox',{name:'Type'}).click()

await page.getByText('Prospect', { exact: true }).click()

await page.locator("button[aria-label='Industry']").click()

await page.getByText('Banking',{exact:true}).click()

await page.locator("button[aria-label='Ownership']").click()

await page.getByText('Public',{exact:true}).click()

await page.locator("//button[text()='Save']").click()

let accountsuccessmsg = page.locator(".toastMessage.slds-text-heading--small.forceActionsText").nth(0)
await expect(accountsuccessmsg).toContainText("Account")
await expect(accountsuccessmsg).toContainText("was created")

let uploadFile=await page.locator("[class='slds-file-selector__button slds-button slds-button_neutral']")
await uploadFile.setInputFiles('Data/img.jpg')


await page.locator("//span[text()='Done']").click();

let uploadsuccessmsg = page.locator(".toastMessage.slds-text-heading--small.forceActionsText").nth(0);

await expect(uploadsuccessmsg).toContainText("1 file was added to the Account.");


})