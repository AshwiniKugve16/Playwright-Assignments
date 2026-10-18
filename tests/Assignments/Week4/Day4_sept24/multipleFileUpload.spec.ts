
import {test,expect} from "@playwright/test"
import path from 'path';

test('multiple file upload', async({page})=>{


    await page.goto('https://www.leafground.com/file.xhtml')

    const chooseFile= page.locator("(//input[@type='file'])[2]")

    await chooseFile.setInputFiles([path.join('Data','img.jpg'), path.join('Data','img2.png')])
    
    await expect(page.getByText('img.jpg')).toBeVisible();
    await expect(page.getByText('img2.png')).toBeVisible();


})