import {Page} from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json'


export class NewCarsPage extends BasePage{

    locators = allLocators.NewCarsPage;

    constructor(page: Page){
        super(page);
    }

    async navigateToTata(){
        await this.click(this.locators.tataPage);
    }

    async navigateToHyundai(){
        await this.click(this.locators.hyundaiPage);
    }

    async navigateToSkoda(){
        await this.click(this.locators.skodaPage);
    }

    async navigateToBmw(){
        await this.click(this.locators.bmwPage);
    }
}