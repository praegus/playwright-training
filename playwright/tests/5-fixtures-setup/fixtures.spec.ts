import { test, expect } from "./fixtures/base";


/*
  More information about describe, beforeAll, beforeEach, afterAll and afterEach (and many more test options  ) can be found here:
  https://playwright.dev/docs/api/class-test
*/

test.describe("actual tests", () => {

  test.beforeEach("test setup", async ({ allCP }) => {
    // BONUS ONLY: TODO: make a page object model for the `/campsites` page
    // add the Locators / functions to operate the filters
    // add it to the fixtures with the name newCP
    await newCP.goto()
  });

  test("Filter and search for location", async ({ allCP, page }) => {
  });

  test("Filter and search for maxPrice", async ({ allCP }) => {
    await expect(newCP.createCampsite).toBeDisabled();
  });

  test("Filter and search for available", async({ allCP }) => {
  })
});

