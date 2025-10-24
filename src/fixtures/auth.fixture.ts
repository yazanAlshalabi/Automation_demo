export function authFixture() {
    return {
        login: async (page, username, password) => {
            await page.fill('input[name="username"]', username);
            await page.fill('input[name="password"]', password);
            await page.click('button[type="submit"]');
        },
        logout: async (page) => {
            await page.click('button#logout');
        }
    };
}