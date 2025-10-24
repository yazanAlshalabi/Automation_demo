import { Page, Locator, expect } from '@playwright/test';
import { ids } from '../utils/test-ids';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  constructor(page: Page) { super(page); }

  async assertLoaded() {
    await this.assertTitle('Products');
  }

  async addFirstVisibleItemToCart() {
    await this.page.click(ids.addToCartButtonText, { strict: false });
  }

  async removeFirstVisibleItemFromCart() {
    await this.page.click(ids.removeButtonText, { strict: false });
  }

  async openCart() { await this.page.click(ids.cartLink); }

  async selectSort(value: 'az'|'za'|'lohi'|'hilo') {
    await this.page.selectOption(ids.sortSelect, value);
  }

  firstInventoryItemName(): Locator {
    return this.page.locator('.inventory_item_name').first();
  }

  cartCount(): Locator {
    return this.page.locator(ids.cartBadge);
  }
}