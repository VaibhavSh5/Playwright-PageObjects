import {Page} from '@playwright/test'
import allLocators from '../locators/locators.json'
import { BasePage } from './BasePage'


export class CarsBasePage extends BasePage{

    locators = allLocators.CarsBase;

    constructor(page: Page){
        super(page);
    }

    async getCarsTitle(): Promise<string>{
        return await this.getText(this.locators.carsTitle)
    }

    async closeConsentPopUp(): Promise<void>{
        const consentPopup = this.page.locator(this.locators.consentPopUp)
        if (await consentPopup.isVisible()){
            console.log("Consent poup is visible, going to click it")
            this.click(this.locators.consentPopUp);
        }else{
            console.log('consent popup is not visible')
        }
    }

    async getCarNamesAndPrices(): Promise<{name: string, price: string}[]>{


        const carNames = this.page.locator(this.locators.carsNames);
        const carPrices = this.page.locator(this.locators.carsPrices);
        const carCounts = await this.page.locator(this.locators.carsNames).count();

        const information: {name: string, price: string}[] = [];

        for (let i=0; i<carCounts; i++){

            const carName = await carNames.nth(i).innerText();
            const carPrice = await carPrices.nth(i).innerText();

            information.push({name: carName, price: carPrice});
        }
        return information;
        }
}