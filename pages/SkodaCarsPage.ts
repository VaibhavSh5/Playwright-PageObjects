import {Page} from '@playwright/test'
import allLocators from '../locators/locators.json'
import { BasePage } from './BasePage'


export class SkodaCarsPage extends BasePage{

    locators = allLocators.SkodaCarsPage;

    constructor(page: Page){
        super(page);
    }

    async skodaCarsFilter(){
        await this.click(this.locators.makeFilter);
    }
}