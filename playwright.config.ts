import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests-bdd",
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",  use: { ...devices["Desktop Firefox"] } }
  ],
  reporter: [["list"], ["html", { open: "never" }]]
});
