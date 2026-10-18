
import {test} from "@playwright/test"

test('Edit Leads', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr2')

    await page.locator('#password').fill('crmsfa')

    await page.locator('.decorativeSubmit').click()

    await page.locator('#label').click()

    await page.locator("a[href='/crmsfa/control/leadsMain']").click()

    await page.locator("a[href*='/crmsfa/control/createLeadForm']").click()

    await page.locator('#createLeadForm_companyName').fill('Wipro')

    await page.locator('#createLeadForm_firstName').fill('Ashwini')

    await page.locator('#createLeadForm_lastName').fill('K R')

    await page.locator("input[name='submitButton']").click()

    await page.locator("a[href*='updateLeadForm']").click()

    await page.locator('#updateLeadForm_companyName').fill('Deloitte')

    await page.locator("input[value='Update']").click()

})