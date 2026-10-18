
import {test,expect} from "@playwright/test"

test('window Handling', async({page, context})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('Demosalesmanager')

    await page.locator('#password').fill('crmsfa')

    await page.getByRole('button',{name:'Login'}).click()

    await page.getByRole('link',{name:'CRM/SFA'}).click()

    await page.locator("//a[text()='Leads']").click()

    await page.locator("//a[text()='Merge Leads']").click()

    //await page.locator("a[href*='partyIdFrom']").click()

    const [fromLeadPage] = await Promise.all([
            context.waitForEvent('page'),
    page.locator("a[href*='partyIdFrom']").click()

])

await fromLeadPage.locator("a.linktext").first().click()

const [toLeadPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("a[href*='partyIdTo']").click()
])

//await toLeadPage.locator("a.linktext").nth(1).click()

await toLeadPage.locator("td.x-grid3-td-partyId a.linktext").nth(1).click()

page.on('dialog', async dialog => {
    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept();
})

await page.locator(".buttonDangerous").click()

await expect(page).toHaveTitle("View Lead | opentaps CRM")


console.log(await page.title());
})