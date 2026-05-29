import { test, expect } from "@playwright/test";

//This testset shows how you can focus on locators and even edit styles for your screenshot testing.

test.describe("actual tests", () => {
  test.beforeEach("test setup", async ({ page }) => {
    await page.goto("https://travels.praegus.nl");
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Praegus Travels/);
  });

  test("landing page", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("campsite grid", async ({ page }) => {
    await expect(page.getByText("Featured Campsites$45/")).toHaveScreenshot('grid.png');
  });

  test("empty grid", async ({ page }) => {
    await expect(page.getByText("Featured Campsites$45/")).toHaveScreenshot('empty-grid.png', {stylePath: 'playwright/tests/screenshots/empty_media.css'});
    // await expect(page.getByText("Featured Campsites$45/")).toHaveScreenshot('empty-grid.png'); 
  });
});
