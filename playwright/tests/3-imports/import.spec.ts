import { test, expect } from "@playwright/test";
import { Page } from "@playwright/test";
import campsiteData from "./data/campsite_data.json";
// TODO: add the imports for the url that is exported in "utils/utils.ts" here so the "has title" test passes
// hint: your IDE might be able to "Quick Fix" if you hover the "url" variable in the test

test("has title", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Praegus Travels/);
});

// TODO: Make sure the test passes by running it before making any adjustments.
//       Now move the fillCampsiteFields function on line 23 to the utils.ts file and export it.
//       Then import it at the top of this file and make sure the test still passes.
test("add campsite", async ({ page }) => {
  await page.goto(url);
  await page.getByRole("link", { name: "List Your Campsite" }).click();

  await fillCampsiteFields(page, campsiteData);
  
  await page.getByRole("button", { name: "Create Campsite" }).click();
  await expect(page.getByText("Campsite created successfully")).toBeVisible();
});

async function fillCampsiteFields(page: Page, data: any) {
  await page.getByRole("textbox", { name: "Name *" }).fill(data.name);
  await page.getByRole("textbox", { name: "Location *" }).fill(data.location);
  await page.getByLabel("Campsite Type *").selectOption(data.campsiteType);
  await page.getByLabel("Terrain Type *").selectOption(data.terrainType);
  await page
    .getByRole("spinbutton", { name: "Price per Night ($) *" })
    .fill(data.pricePerNight);
  await page
    .getByRole("spinbutton", { name: "Capacity *" })
    .fill(data.capacity);
  await page
    .getByLabel("Accessibility Level *")
    .selectOption(data.accessibilityLevel);
}

/*
Bonus 1:
Making the "add campsite" test more specific
- add and export a const variable to the utils.ts file called "newCampsiteUrl"
- declare the value with the url for adding a new campsite (ends in /new)
- import the newly added variable in this file
- use it to replace the first 2 lines in the "add campsite" test and make sure the test passes.

Bonus 2:
Making the "add campsite" test more complete
- Look at the data being imported from campsite_data.json
- Look at which data is being used by the "fillCampsiteFields" function
- Choose any number of unused data fields:
  - Extend the current "fillCampsiteFields" function (that you moved to utils.ts) to also fill in those fields
  - Use Playwright (codegen, or Testing tab) to find your locators
*/
