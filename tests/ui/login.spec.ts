import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { Users } from '../../src/fixtures/test-data';

test('Login with valid user lands on Products', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login(Users.valid.username, Users.valid.password);
  await inventory.assertLoaded();
});