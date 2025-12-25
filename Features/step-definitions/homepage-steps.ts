import {Given, When , Then} from '@cucumber/cucumber'
import { CustomWorld } from '../hooks/world';
import { expect } from 'playwright/test';

Given('the user is on Homepage', async function (this: CustomWorld) {
        console.log('the user is on Homepage')
        await this.pages.homepage.navigateToHomepage();
         });
       
When('user hovers on the New Cars option and clicks on Find New Cars', async function (this: CustomWorld) {
            console.log('the user hovers on the New Cars option')
            await this.pages.homepage.findNewCars();
         });

Then('they are directed to the New Cars page', async function (this: CustomWorld) {
            console.log('they are directed to the New Cars page')
            console.log(`Title for page: ${await this.page.title()}`)
            expect(await this.page.title()).toContain('New Cars 2025')
         });