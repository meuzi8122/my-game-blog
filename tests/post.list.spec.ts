import { expect, test } from "@playwright/test";

test("LoR関連の投稿一覧ページの表示チェック", async ({ page }) => {
    await page.goto("/posts/lor/1");
    await expect(page.locator("h1")).toHaveText("Library of Ruina");
});

test("LCB関連の投稿一覧ページの表示チェック", async ({ page }) => {
    await page.goto("/posts/lcb/1");
    await expect(page.locator("h1")).toHaveText("Limbus Company");
});