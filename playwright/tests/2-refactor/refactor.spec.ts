import { Page, test, expect } from "@playwright/test";

//TODO: create a const variable called "url" with the right value, and make sure the first test passes again

test("has title", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Praegus Travels/);
});

test("get started link", async ({ page }) => {
  await page.goto(url);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Add Campsite" })
    .click();
  // All the recorded actions for filling in the fields of a campsite have been moved to the function "fillCampsiteFields"
  // TODO: call the function here, with the right argument, to make the test pass again
  await page.getByRole("button", { name: "Create Campsite" }).click();

  // Bonus: change the following line to "expect" the text to be visible, instead of clicking it. turning this into an actual test!
  // You can find more information on this here: https://playwright.dev/docs/intro#installing-playwright
  await page.getByText("Campsite created successfully").click();
});

async function fillCampsiteFields(page: Page) {
  await page.getByRole("textbox", { name: "Name *" }).click();
  await page.getByRole("textbox", { name: "Name *" }).fill("a");
  await page.getByRole("textbox", { name: "Name *" }).press("Tab");
  await page.getByRole("textbox", { name: "Location *" }).fill("b");
  await page.getByRole("textbox", { name: "Location *" }).press("Tab");
  await page.getByLabel("Campsite Type *").press("ArrowDown");
  await page.getByLabel("Campsite Type *").selectOption("tent");
  await page.getByLabel("Campsite Type *").press("Tab");
  await page.getByLabel("Terrain Type *").press("ArrowDown");
  await page.getByLabel("Terrain Type *").selectOption("forest");
  await page.getByLabel("Terrain Type *").press("Tab");
  await page
    .getByRole("spinbutton", { name: "Price per Night ($) *" })
    .fill("1");
  await page
    .getByRole("spinbutton", { name: "Price per Night ($) *" })
    .press("Tab");
  await page.getByRole("spinbutton", { name: "Capacity *" }).fill("1");
  await page.getByRole("spinbutton", { name: "Capacity *" }).press("Tab");
  await page.getByLabel("Accessibility Level *").press("ArrowDown");
  await page.getByLabel("Accessibility Level *").selectOption("easy");
  await page.getByLabel("Accessibility Level *").press("Tab");
}
