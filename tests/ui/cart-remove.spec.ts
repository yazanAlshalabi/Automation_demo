import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { Users } from '../../src/fixtures/test-data';

test('Add to cart then remove returns count to empty', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login(Users.valid.username, Users.valid.password);
  await inventory.assertLoaded();

  await inventory.addFirstVisibleItemToCart();
  await inventory.cartCount().waitFor({ state: 'visible' });
  await inventory.removeFirstVisibleItemFromCart();

  await expect(inventory.cartCount()).toHaveCount(0);
});