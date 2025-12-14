import {Page, expect} from "@playwright/test";
import { BasePage } from "./BasePage";
import alllocators from '../locators/locators.json'


export class Homepage extends BasePage{

    private locators = alllocators.Homepage
    constructor(page: Page){
        super(page);
    }

    // private newCarsLoc = () => this.page.locator('//li[@class= " nS6XVS"]/div')
    // private findNewCarsLoc = () => this.page.locator('text="Find New Cars"')

    async navigateToHomepage(){
        await this.navigateToURL('/');
    }

    async findNewCars(){
        await this.hover(this.locators.newCars);
        await this.click(this.locators.findNewCars);
    }
}