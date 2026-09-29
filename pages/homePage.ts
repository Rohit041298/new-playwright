import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('div.app_logo');
    }

    async verifyHomePageTitle() {
        await expect(this.title).toHaveText('Swag Labs');
    }
}