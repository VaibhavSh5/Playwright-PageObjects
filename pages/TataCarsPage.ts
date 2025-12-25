import {Page} from '@playwright/test'
import allLocators from '../locators/locators.json'
import { BasePage } from './BasePage'


export class TataCarsPage extends BasePage{

    locators = allLocators.TataCarsPage;

    constructor(page: Page){
        super(page);
    }
    async tataCarsFilter(){
        await this.click(this.locators.makeFilter);
    }
}