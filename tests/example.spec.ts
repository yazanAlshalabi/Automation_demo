import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { authFixture } from '../src/fixtures/auth.fixture';

test.describe('Example Test Suite', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await authFixture.login(page); // Assuming login method is defined in auth.fixture.ts
    });

    test('should navigate to home page and verify title', async () => {
        await homePage.navigate();
        const title = await homePage.getTitle();
        expect(title).toBe('Expected Home Page Title'); // Replace with actual title
    });

    test('should click button and verify action', async () => {
        await homePage.navigate();
        await homePage.clickButton('Button Selector'); // Replace with actual button selector
        // Add assertions to verify the result of the button click
    });

    test.afterEach(async ({ page }) => {
        await authFixture.logout(page); // Assuming logout method is defined in auth.fixture.ts
    });
});