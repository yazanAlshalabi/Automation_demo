import { Page, expect } from '@playwright/test';
import { ids } from '../utils/test-ids';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }

  async open() { await this.goto('/'); }

  async login(username: string, password: string) {
    await this.page.fill(ids.username, username);
    await this.page.fill(ids.password, password);
    await this.page.click(ids.loginButton);
  }

  errorBanner() { return this.page.locator(ids.errorMessage); }
}