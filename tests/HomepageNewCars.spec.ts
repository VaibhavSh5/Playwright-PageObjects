// import {test, expect} from '@playwright/test'
// import {Homepage} from '../pages/Homepage'
import {test, expect} from '../utils/test-base'

import locators from '../locators/locators.json'


test.describe('Homepage Car Test', ()=>{

    // let homepage: Homepage;

    test.beforeEach('Navigating to CARWALE homepage', async({pages})=> {

        // homepage = new Homepage(page);
        await pages.homepage.navigateToHomepage();
    })

    test('Finding new cars on CARWALE', async({pages})=>{

        await pages.homepage.findNewCars();
        await pages.homepage.waitForTimeout(10000);
        await pages.carsBasePage.closeConsentPopUp();
        expect(pages.basePage).toHaveURL('/new-cars/');
        expect(await pages.homepage.getTextContent(locators.Homepage.newCarsHeading)).toBe('New Cars');
    })
});