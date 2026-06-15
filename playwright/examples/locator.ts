import { test, expect } from '@playwright/test';

test('locator examples', async ({ page }) => {


  // recommended way (role-based)
  const login_button = page.getByRole('button', { name: 'Login' });
  // <button>Login</button>

  // label-based input
  const username_field = page.getByLabel('Username');
  // <label for="username">Username</label>
  // <input id="username" />

  // using 'data-testid' property
  const username_locator = page.getByTestId('username') 
  // <input data-testid="username" />

  // id selector
  await page.locator('#login-button').click();
  // <button id="login-button">Login</button>

  // class selector
  await page.locator('.btn-primary').click();
  // <button class="btn-primary">Submit</button>

  // attribute selector (most common in tests)
  const usernameField = page.locator('[data-test="username"]')
  // <input data-test="username" />

  // tag + class
  await page.locator('button.btn-primary').click();
  // <button class="btn-primary">Add to cart</button>

  // nested element
  await page.locator('.inventory_item .btn').click();
  // <div class="inventory_item">
  //   <button class="btn">Add to cart</button>
  // </div>

  // first / nth (0-indexed)
  const firstItem =  page.locator('.inventory_item').first();
  const secondItem = page.locator('.inventory_item').nth(1);
  // <div class="inventory_item">Item 1</div>
  // <div class="inventory_item">Item 2</div>

  // text selector
  await page.locator('text=Checkout').click();
  // <button>Checkout</button>

  // filter example
  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Backpack' })
    .click();

  // chaining locators
  await page.locator('.inventory_item').first().getByRole('button', { name: 'Add to cart' }).click();
  

  // has selector
  await page.locator('.inventory_item', {
    has: page.locator('text=Backpack'),
  }).click();

  // count assertion
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);
});