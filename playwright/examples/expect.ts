import { test, expect } from '@playwright/test';

test('expect examples', async ({ page }) => {
  await page.goto('https://example.com');

  const loginButton = page.getByRole('button', { name: 'Login' });
  const username = page.getByLabel('Username');

  // visibility
  await expect(loginButton).toBeVisible();
  const banner = page.locator('.banner');
  await expect(banner).toBeHidden();

  // text checks
  const title = page.locator('h1');
  await expect(title).toHaveText('Welcome'); // exact match
  await expect(title).toContainText('Welcome'); // partial match

  // input values
  await expect(username).toHaveValue('standard_user');

  // URL checks
  await expect(page).toHaveURL(/inventory/); // regEx

  // page title
  await expect(page).toHaveTitle(/Example/);

  
  // element count
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);

  // enabled / disabled state
  await expect(loginButton).toBeEnabled();
  await expect(loginButton).toBeDisabled();

  // checked state
  const checkbox = page.getByRole('checkbox');
  await expect(checkbox).toBeChecked();

  // class check (important one people forget)
  await expect(loginButton).toHaveClass(/btn-primary/);

  // attribute check
  await expect(loginButton).toHaveAttribute('type', 'submit');

  // CSS property check
  await expect(loginButton).toHaveCSS('opacity', '1');

  // locator existence / attachment
  await expect(loginButton).toBeAttached();

  // soft assertions (test continues even if it fails)
  await expect.soft(title).toHaveText('Welcome');
  await expect.soft(items).toHaveCount(6);

  //comparison
  const response_code = 200
  expect(response_code).toEqual(200)

});