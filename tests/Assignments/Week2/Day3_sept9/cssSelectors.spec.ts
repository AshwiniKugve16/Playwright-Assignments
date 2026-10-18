
import {test} from "@playwright/test"

test('Css selectors', async({page})=>{

   await page.goto('https://leaftaps.com/opentaps/control/main')

   await page.locator('#username').fill('democsr2')

   await page.locator('#password').fill('crmsfa')

   await page.locator('.decorativeSubmit').click()

   await page.locator('#label').click()

   await page.locator('a[href="/crmsfa/control/leadsMain"]').click()

   await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()

   await page.locator('#createLeadForm_companyName').fill('Wipro')

   await page.locator('#createLeadForm_firstName').fill('Ashwini')

   await page.locator('#createLeadForm_personalTitle').fill('Mrs')

   await page.locator('#createLeadForm_generalProfTitle').fill('Project Engineer')

   await page.locator('#createLeadForm_annualRevenue').fill('1500000')

   await page.locator('#createLeadForm_departmentName').fill('Testing')

   const sourceDropdown= page.locator('#createLeadForm_dataSourceId')

   const options= sourceDropdown.locator('option')

   for(let i=0;i< await options.count();i++){
        console.log(await options.nth(i).innerText())
   }

   await page.locator('#createLeadForm_primaryPhoneNumber').fill('9686756164')

   await page.locator("input[name='submitButton']").click()

   

})