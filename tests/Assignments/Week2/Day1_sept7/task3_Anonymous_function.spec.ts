
import {test} from "@playwright/test"

test('Anonymous function', async({page})=>{

    setTimeout(function(){
        console.log("This msg is delayed by 2 seconds");
    }, 2000)
})