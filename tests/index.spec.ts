import { expect, test } from "@playwright/test";

test("トップページの表示チェック", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("最近の投稿");
});

