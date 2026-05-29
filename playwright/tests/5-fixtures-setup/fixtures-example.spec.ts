import { test, expect } from "./fixtures/base";
import campsiteData from "./data/campsite_data.json";

/*
  More information about describe, beforeAll, beforeEach, afterAll and afterEach (and many more test options  ) can be found here:
  https://playwright.dev/docs/api/class-test
*/

test.describe("actual tests", () => {

  test.beforeEach("test setup", async ({ newCP }) => {
    await newCP.goto()
  });

  test("add campsite", async ({ newCP, page }) => {
    await newCP.fillCampsiteFields(campsiteData);
    await newCP.createCampsite.click();
    await expect(page.getByText("Campsite created successfully")).toBeVisible();
  });

  test("can't create a campsite without data", async ({ newCP }) => {
    await expect(newCP.createCampsite).toBeDisabled();
  });

  test("check title", async({ newCP }) => {
    await expect(newCP.page).toHaveTitle(/Praegus Travels/, {timeout: 5000})
  })
});

