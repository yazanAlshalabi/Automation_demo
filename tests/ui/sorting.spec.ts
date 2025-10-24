import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { Users } from '../../src/fixtures/test-data';

async function firstName(page: InventoryPage) {
  return (await page.firstInventoryItemName().textContent())?.trim();
}

test('Sorting by Price (low to high) changes first item', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  await login.open();
  await login.login(Users.valid.username, Users.valid.password);
  await inventory.assertLoaded();

  const before = await firstName(inventory);
  await inventory.selectSort('lohi');
  const after = await firstName(inventory);

  expect(before).not.toBe(after);
});