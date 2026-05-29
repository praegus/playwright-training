import { test } from '@playwright/test';

test.use({
  launchOptions: {
    slowMo: 250,
    headless: false,
  },
});

let number = '100'

test('actual debugger', async ({ page }) => {
  await page.goto('https://travels.praegus.nl/');
  await page.getByRole('navigation').getByRole('link', { name: 'Add Campsite' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('test');
  await page.getByRole('textbox', { name: 'Location *' }).click();
  await page.getByRole('textbox', { name: 'Location *' }).fill('hier');
  await page.getByLabel('Campsite Type *').selectOption('tent');
  await page.getByLabel('Terrain Type *').selectOption('forest');
  await page.getByRole('spinbutton', { name: 'Price per Night ($) *' }).click();
  await page.getByRole('spinbutton', { name: 'Price per Night ($) *' }).fill('50');

  number = '200'

  await page.getByRole('spinbutton', { name: 'Price per Night ($) *' }).press('Tab');
  await page.getByRole('spinbutton', { name: 'Capacity *' }).fill('5');
  await page.getByLabel('Accessibility Level *').selectOption('easy');
  await page.getByRole('button', { name: 'Create Campsite' }).click();
});

test('timeout debugging', async ({ page }) => {
  await page.goto('https://travels.praegus.nl/');
  await page.pause();
  await page.getByRole('navigation').getByRole('link', { name: 'Add Campsite' }).click();
  await page.waitForTimeout(5000)
  await page.getByRole('navigation').getByRole('link', { name: 'Home'}).click();
});

test('log statements', async ({ page}) => {
    await page.goto('https://travels.praegus.nl/');
    console.log(number)
    await page.goto('https://google.com/')
})