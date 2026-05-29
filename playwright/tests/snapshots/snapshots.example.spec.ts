import { test, expect } from "@playwright/test";

// Using the aria / accessibility tree, you can also perform checks

test.describe("snapshot tests", () => {
  test.beforeEach("test setup", async ({ page }) => {
    await page.goto("https://travels.praegus.nl");
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Praegus Travels/);
  });

  test("landing page", async ({ page }) => {
    await expect(page).toMatchAriaSnapshot()
  });
  
  //Try running this test and see what happens
  test("landing page emptyname", async ({ page }) => {
    await expect(page).toMatchAriaSnapshot(``)
  });

  test("grid with yaml", async ({ page }) => {
    await expect(page.getByText("Featured Campsites$45/")).toMatchAriaSnapshot({name: 'grid.yml'});
  });

  //inline yaml allows more flexibility such as using variables (be careful with syntaxing)
  test("grid with inline", async ({ page }) => {
    await expect(page.getByText("Featured Campsites$45/")).toMatchAriaSnapshot('- heading "Featured Campsites" [level=2]');
  });

});

