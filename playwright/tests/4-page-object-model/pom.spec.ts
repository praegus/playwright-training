import { test, expect } from "@playwright/test";
import campsiteData from "./data/campsite_data.json";
import { NewCampsitePage } from "./pages/newCampsite.page";

/*
TODO: edit the page "newCampsite.page.ts" by adding a locator for:
  - amenities
  - description
  - imageUrl
And also add these to the "fillCampsiteFields" function
*/

test("add campsite", async ({ page }) => {
  const newCP = new NewCampsitePage(page)
  await newCP.goto();
  await newCP.fillCampsiteFields(campsiteData);
  await newCP.createCampsite.click();
  // NB: the following check is done on another webpage, this is why the newCP is not being used
  await expect(page.getByText("Campsite created successfully")).toBeVisible();
});


/* 
Bonus: make a locator for "Available for booking" and based on the "true" or "false" in the data, make sure it is set accordingly
*/