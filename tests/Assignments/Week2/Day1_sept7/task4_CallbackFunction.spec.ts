
import { test } from "@playwright/test"

test('Callback function', async ({ page }) => {

    function getUserData(callback: () => void) {

        setTimeout(function () {
            callback()
        }, 3000)
    }

    getUserData(function () {
        console.log("Call back function")
    })

})