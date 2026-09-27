import { Page, expect, Locator } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly header: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.header = page.locator("div.login_logo")
        this.username = page.locator('#user-name');
        this.password= page.locator('#password');
        this.submitButton=page.locator('#login-button');
    }

    async headerIsVisible(){
        await expect(this.header).toBeVisible();
    }

    async usernameFieldIsVisible(){
        await expect(this.username).toBeVisible();
    }

    async passwordFieldIsVisible(){
        await expect(this.password).toBeVisible();
    }

    async loginButtonIsVisible(){
        await expect(this.submitButton).toBeVisible();
    }

    async fillLoginCredential(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async verifyLoginButtonIsClicked(){
        await this.submitButton.click();
    }
}