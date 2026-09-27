import { test } from '../fixture/baseTest';
import { data } from '../data/test.data';

test.describe('Login Page', () => {
    test('Verify login page elements are visible', async ({ loginPage }) => {
        await loginPage.page.goto('/');
        await loginPage.headerIsVisible();
        await loginPage.usernameFieldIsVisible();
        await loginPage.passwordFieldIsVisible();
        await loginPage.loginButtonIsVisible();
    });

    test('Verify user can login with valid credentials', async ({ loginPage }) => {
        await loginPage.page.goto('/');
        await loginPage.fillLoginCredential(data.validUser.username, data.validUser.password);
        await loginPage.verifyLoginButtonIsClicked();
    });
});