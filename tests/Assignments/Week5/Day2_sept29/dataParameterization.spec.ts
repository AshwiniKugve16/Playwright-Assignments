
import { test } from "@playwright/test";
import dotenv from "dotenv";
import leadData from "../../../../Data/leadData.json";

let filename = process.env.envfile || "qa";
dotenv.config({ path: `Data/${filename}.env` })

let URL = process.env.lf_url as string;
let Username = process.env.lf_username as string;
let Password = process.env.lf_password as string;

test("Create Lead using environment variables", async ({ page }) => {
    await page.goto(URL)

    await page.locator("#username").fill(Username);
    await page.locator("#password").fill(Password);

    await page.locator(".decorativeSubmit").click();


    await page.getByText("CRM/SFA").click();
    await page.getByRole("link",{name:'Leads'}).click()
    await page.getByRole("link",{name:'Create Lead'}).click();


    await page.locator("#createLeadForm_companyName").fill(leadData.companyName);
    await page.locator("#createLeadForm_firstName").fill(leadData.firstName);
    await page.locator("#createLeadForm_lastName").fill(leadData.lastName);

    await page.locator("#createLeadForm_dataSourceId").selectOption({ label: "Direct Mail" });
  
    await page.locator("#createLeadForm_marketingCampaignId")
        .selectOption({ label: "Demo Marketing Campaign" });

    const campaignOptions = page.locator("#createLeadForm_marketingCampaignId option");
    console.log("Campaign count:", await campaignOptions.count());
    console.log("Campaign values:", await campaignOptions.allTextContents());

    await page.locator("#createLeadForm_industryEnumId").selectOption({ label: "General Services" });

    await page.locator("#createLeadForm_currencyUomId").selectOption({ label: "INR - Indian Rupee" });

    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({ label: "India" });

    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({ label: "KARNATAKA" });

    //Count and print state dropdown values
    const stateOptions = page.locator("#createLeadForm_generalStateProvinceGeoId option");
    console.log("State count:", await stateOptions.count());
    console.log("State values:", await stateOptions.allTextContents());

    await page.getByRole("button", { name: "Create Lead" }).click();

})