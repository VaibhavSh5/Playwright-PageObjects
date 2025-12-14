import {Page} from '@playwright/test'
import allLocators from '../locators/locators.json'
import { BasePage } from './BasePage'


export class BMWCarsPage extends BasePage{

    locators = allLocators.BMWCarsPage;

    constructor(page: Page){
        super(page);
    }

    async bmwCarsFilter(){
        await this.click(this.locators.makeFilter);
    }
}