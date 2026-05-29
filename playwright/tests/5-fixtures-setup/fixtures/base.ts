import { test as base, expect } from '@playwright/test';
import { NewCampsitePage } from '../pages/newCampsite.page';


/*
  More information about fixtures can be found here:
  https://playwright.dev/docs/test-fixtures
*/

export interface Fixtures {
  newCP: NewCampsitePage;
}

export const test = base.extend<Fixtures>({
  newCP: async ({ page }, use) => {
    await use(new NewCampsitePage(page));
  },
});

export { expect };

