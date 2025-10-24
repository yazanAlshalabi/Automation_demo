import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { Users } from '../../src/fixtures/test-data';
import { ids } from '../../src/utils/test-ids';

test('Locked out user sees error banner', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(Users.locked.username, Users.locked.password);
  await expect(page.locator(ids.errorMessage)).toBeVisible();
});