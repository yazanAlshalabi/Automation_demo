import { Page, Expect, expect } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async assertTitle(text: string) {
    await expect(this.page.locator('.title')).toHaveText(text);
  }
}