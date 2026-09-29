import { test } from '../fixture/baseTest';
import  { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page', () => {
    test('Verify the home page title', async ({ homePage }) => {
        const homePageInstance = new HomePage(homePage);
        await homePageInstance.verifyHomePageTitle();
    }); 
});