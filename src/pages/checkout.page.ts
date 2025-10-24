import { Page, expect } from '@playwright/test';
import { ids } from '../utils/test-ids';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  constructor(page: Page) { super(page); }

  async stepOneFill(first: string, last: string, zip: string) {
    await this.page.fill(ids.firstName, first);
    await this.page.fill(ids.lastName, last);
    await this.page.fill(ids.postalCode, zip);
    await this.page.click(ids.continueButton);
  }

  async finish() {
    await this.page.click(ids.finishButton);
  }

  async assertTotalHasCurrency() {
    await expect(this.page.locator(ids.summaryTotal)).toContainText('Total: $');
  }

  async assertComplete() {
    await expect(this.page.locator(ids.completeHeader)).toHaveText(/Thank you for your order!/i);
  }
}