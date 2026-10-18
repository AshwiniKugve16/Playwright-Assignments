
import {test, expect} from "@playwright/test"

test('Input & Assertion Practice', async({page})=>{

    await page.goto("https://leafground.com/input.xhtml")

    const disabledTextbox = page.getByPlaceholder('Disabled')

    await expect(disabledTextbox).toBeDisabled()

    const enabledTextBox =  page.locator("input[placeholder='Babu Manickam']")
    await expect(enabledTextBox).toBeEditable()
    await enabledTextBox.fill('Ashwini')

    const enabledTextBox1 = page.locator("input[value='Chennai']")
    await expect.soft(enabledTextBox1).toBeDisabled()

    await page.locator("input[value='My learning is superb so far.']").fill("Playwright Learning")

})
