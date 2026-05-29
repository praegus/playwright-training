import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Folder containing tests
  testDir: './tests',

  // Global timeout per test
  timeout: 30 * 1000,

  // Timeout for expect()
  expect: {
    timeout: 5000,
  },

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail CI if test.only exists
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Parallel workers
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: [
    ['html'],
    ['list'],
  ],

  use: {
    // Base URL
    baseURL: 'http://localhost:3000',

    // Browser settings
    headless: true,

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video recording
    video: 'retain-on-failure',

    // Trace collection
    trace: 'on-first-retry',

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Browser viewport
    viewport: { width: 1280, height: 720 },

    // Action timeout
    actionTimeout: 0,

    // Navigation timeout
    navigationTimeout: 30 * 1000,
  },

  // Multiple browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    // Mobile examples
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },

    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],

  // Start local dev server before tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

  // Output folder
  outputDir: 'test-results/',
});