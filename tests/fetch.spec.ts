import { test, expect } from "@playwright/test";

test.describe('Fetch WebWorker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:8080/example/vanilla-fetch.html");
  })
  test("example 1 response should not be modified", async ({ page }) => {
    const text = await page.locator('id=one').innerText();
    expect(text).toEqual('this is the first text file example (example1.txt)')
  });
  test("example 2 response should be modified", async ({ page }) => {
    const text = await page.locator('id=two').innerText();
    expect(text).toEqual('thzs zs thz szcznd tzxt fzlz zxzmplz (zxzmplz2.txt)')
  });
})
