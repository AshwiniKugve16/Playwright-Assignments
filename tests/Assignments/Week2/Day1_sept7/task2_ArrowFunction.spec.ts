
import {test} from "@playwright/test"

test('Arrow function', async({page})=>{

    const double= (num: number) =>{
        return num*2;

    }
    console.log(double(10))

})