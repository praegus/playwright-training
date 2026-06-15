import { test as setup, expect } from '@playwright/test'
import path from 'path'

const standardUserAuthFile = path.join(__dirname, '.auth/standard-user.json')

const visualUserAuthFile = path.join(__dirname, '.auth/visual-user.json')

const password = process.env['PASSWORD'] || ''
const baseUrl = process.env['BASE_URL'] || ''
const standard_user = 'standard_user'
const visual_user = 'visual_user'

setup('authenticate standard user', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByTestId('[data-test="username"]').fill(standard_user)
  await page.locator('[data-test="password"]').fill(password)
  await page.locator('[data-test="login-button"]').click()

  await page.waitForURL(`${baseUrl}/inventory.html`, { timeout: 5000 })
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

  await page.context().storageState({ path: standardUserAuthFile })
})

setup('authenticate visual user', async ({ page }) => {
  await page.goto(baseUrl)

  await page.locator('[data-test="username"]').fill(visual_user)
  await page.locator('[data-test="password"]').fill(password)
  await page.locator('[data-test="login-button"]').click()

  await page.waitForURL(`${baseUrl}/inventory.html`, { timeout: 5000 })
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

  await page.context().storageState({ path: visualUserAuthFile })
})
