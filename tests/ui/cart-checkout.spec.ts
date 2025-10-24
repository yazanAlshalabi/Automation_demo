import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { CartPage } from '../../src/pages/cart.page';
import { CheckoutPage } from '../../src/pages/checkout.page';
import { Users, Checkout } from '../../src/fixtures/test-data';

test('User can add item and complete checkout', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();
  await login.login(Users.valid.username, Users.valid.password);
  await inventory.assertLoaded();

  await inventory.addFirstVisibleItemToCart();
  await inventory.openCart();
  await cart.assertHasItems();
  await cart.checkout();

  await checkout.stepOneFill(Checkout.firstName, Checkout.lastName, Checkout.postalCode);
  await checkout.assertTotalHasCurrency();
  await checkout.finish();
  await checkout.assertComplete();
});