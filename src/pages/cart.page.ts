import { Page, expect } from '@playwright/test';
import { ids } from '../utils/test-ids';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  constructor(page: Page) { super(page); }

  async assertHasItems() {
    await expect(this.page.locator(ids.cartItem)).toBeVisible();
  }

  async checkout() { await this.page.click(ids.checkoutButton); }
}