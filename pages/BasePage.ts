import {Page} from '@playwright/test';

export class BasePage{

    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async click(locator: string){
        await this.page.locator(locator).click();
    }

    async fill(locator: string, value: string){
        await this.page.locator(locator).fill(value);
    }

    async hover(locator: string){
        await this.page.locator(locator).hover();
    }

    async getText(locator: string){
        return await this.page.locator(locator).innerText();
    }

    async getTextContent(locator: string){
        return await this.page.locator(locator).textContent();
    }

    async navigateToURL(URL: string){
        await this.page.goto(URL);
    }

    async waitForTimeout(timeout: number){
        await this.page.waitForTimeout(timeout);
    }

    async goBackPage(){
        await this.page.goBack();
    }
}