import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { data } from '../data/test.data';

export const test = base.extend<{
    loginPage: LoginPage;
    homePage: Page;
}>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await page.goto('/');
        await loginPage.fillLoginCredential(data.validUser.username, data.validUser.password);
        await loginPage.verifyLoginButtonIsClicked();

        await expect(page).toHaveURL(/inventory\.html|\/$/);
        await use(page);
    }
});