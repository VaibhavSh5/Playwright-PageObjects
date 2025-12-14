import {Page} from '@playwright/test'
import allLocators from '../locators/locators.json'
import { BasePage } from './BasePage'


export class HyundaiCarsPage extends BasePage{

    locators = allLocators.HyundaiCarsPage;

    constructor(page: Page){
        super(page);
    }

    async hyundaiCarsFilter(){
        await this.click(this.locators.makeFilter);
    }
}