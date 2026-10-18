
import {test,expect} from "@playwright/test"
import {parse} from "csv-parse/sync"
import path from 'path'
import fs from 'fs'

const filePath = path.join(
    process.cwd(),
    'tests',
    'Assignments',
    'Week5',
    'Day1_sept28',
    'loginData.csv'
)

let value:any=parse(fs.readFileSync(filePath,'utf-8'),{
    columns:true, 
    skip_empty_lines:true
})
console.log(value)

for(let details of value){

test(`read and convert csv file into JS Objects ${details.tcid}`, async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(details.username)
    await page.locator('#password').fill(details.password)
    await page.locator('.decorativeSubmit').click()

    await expect(page.getByText('CRM/SFA', { exact: true })).toBeVisible();
} )
}
