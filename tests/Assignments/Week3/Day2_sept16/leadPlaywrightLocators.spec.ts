
import {test} from "@playwright/test"

test('Create a Lead using Playwright Locators',async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.getByLabel('Username').fill('Demosalesmanager')

    await page.getByLabel('Password').fill('crmsfa')

    await page.getByRole('button',{name:'Login'}).click()

    await page.getByRole('link', { name: 'CRM/SFA' }).click()

    await page.getByRole('link',{name:'Leads'}).click()

    await page.getByRole('link', {name:'Create Lead'}).click()

    await page.locator('#createLeadForm_companyName').fill('wipro')
    
    await page.locator('#createLeadForm_firstName').fill('Narayan')

    await page.locator('#createLeadForm_lastName').fill('Murthy')

    await page.locator('#createLeadForm_personalTitle').fill('Mr')

    await page.locator('#createLeadForm_generalProfTitle').fill('Software Engineer')

    await page.locator('#createLeadForm_annualRevenue').fill('50000')

    await page.locator('#createLeadForm_departmentName').fill('Testing')

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9452763871')

    await page.getByRole('button',{name:'Create Lead'}).click()

})