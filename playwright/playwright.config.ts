import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, '.env')})

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['dot', {}],
    // ['line']
  ],
  outputDir: 'test-results',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup project
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: {
        trace: 'off',
        screenshot: 'off',
        video: 'off'
      },
      outputDir: ""
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'tests/.auth/standard-user.json',
        trace: 'on',
        launchOptions: {headless: false, slowMo: 50}
      },
      dependencies: ['setup']
    }
  ]
})
