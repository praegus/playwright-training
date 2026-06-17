import { test, expect } from '@playwright/test'

const baseUrl = process.env['BASE_URL'] || ''

test('price of first item', async ({ page }) => {
  await page.goto(`${baseUrl}/inventory.html`)
  await page.pause()
  // expect the first item to be priced at 29.99
  await expect(
    page.locator('[data-test="inventory-item-description"]').first()
    .locator('[data-test="inventory-item-price"]'))
    .toContainText('29.99')
})

test.describe('visual user tests', () => {
  test.use({
    storageState: 'tests/.auth/visual-user.json'
  })
  test('price of first item is DIFFERENT', async ({ page }) => {
    await page.goto(`${baseUrl}/inventory.html`)
    await page.pause()
    // expect the first item NOT to be priced at 29.99
    await expect(
      page.locator('[data-test="inventory-item-description"]').first()
      .locator('[data-test="inventory-item-price"]'))
      .not.toContainText('29.99')
  })
})
