import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

test.describe.serial('SauceDemo image mocking demo', () => {
  test('1 - normal run (no mocking, inspect real images)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')

    await expect(page.locator('.inventory_list')).toBeVisible()
    await expect(page).toHaveScreenshot('regular-pictures.png')
    // Pause so you can visually inspect real images
    await page.pause()
  })

  test('2 - mocked images (ketchup everywhere)', async ({ page }) => {
    const imagePath = path.resolve('tests/mock/ketchup.jpeg')
    const imageBuffer = fs.readFileSync(imagePath)

    await page.route('**/*.{png,jpg,jpeg,webp,svg}', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'image/png',
        body: imageBuffer
      })
    })

    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')

    await expect(page.locator('.inventory_list')).toBeVisible()
    await page.pause()

    await expect(page).toHaveScreenshot('mocked-pictures.png')
  })
})
