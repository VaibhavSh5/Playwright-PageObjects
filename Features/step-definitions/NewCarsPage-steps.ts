import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../hooks/world";
import { expect } from "playwright/test";
import locators from '../../locators/locators.json';
        
Given('the user is on the cars Homepage', async function (this: CustomWorld) {
        
    console.log('the user is on the carswale Homepage')
    await this.pages.homepage.navigateToHomepage();
         });
        
       
When('the user hover on the New cars and click on Find new cars', {timeout: 60000}, async function (this: CustomWorld) {
    console.log('the user hovers on the New cars option and clicks on Find new cars page')
    await this.pages.homepage.findNewCars();
         });
        
Then('user is redirected to the New Cars page', async function (this: CustomWorld) {
    console.log('user is redirected to the New Cars page')
    expect(await this.page.title()).toContain('New Cars')
         });
         
Then('user clicks on the {string} link', async function (this: CustomWorld, string) {
    console.log(`user clicks on the ${string} link`)
    switch(string){

        case "BMW": 
            await this.pages.newCarsPage.navigateToBmw();
            break;

        case "Skoda":
            await this.pages.newCarsPage.navigateToSkoda();
            break;

        case "Hyundai":
            await this.pages.newCarsPage.navigateToHyundai();
            break;
        
        case "Tata":
            await this.pages.newCarsPage.navigateToTata();
            break;

        default:
            throw new Error("Car doesn't exists!!");
    }
         });
       
Then('user is redirected to {string} on {string} page', async function (this: CustomWorld, name: string, carHeading: string) {
    console.log(`user is redirected to the ${carHeading} page`)

        switch(name){

        case "BMW": 
            expect(await this.pages.newCarsPage.getText(locators.BMWCarsPage.bmwCarsHeading)).toBe(carHeading);
            await this.pages.bmwCarsPage.bmwCarsFilter();
            break;

        case "Skoda":
            expect(await this.pages.newCarsPage.getText(locators.SkodaCarsPage.skodaCarsHeading)).toBe(carHeading);
            await this.pages.skodaCarsPage.skodaCarsFilter();
            break;

        case "Hyundai":
            expect(await this.pages.newCarsPage.getText(locators.HyundaiCarsPage.hyundaiCarsHeading)).toBe(carHeading);
            await this.pages.hyundaiCarsPage.hyundaiCarsFilter();
            break;
        
        case "Tata":
            expect(await this.pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)).toBe(carHeading);
            await this.pages.tataCarsPage.tataCarsFilter();
            break;

        default:
            throw new Error("Car doesn't exists!!");
    }
         });