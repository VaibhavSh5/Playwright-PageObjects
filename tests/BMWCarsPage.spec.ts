import {test, expect} from '../utils/test-base'
import allLocators from '../locators/locators.json'


test.describe('Validations on BMW cars page', ()=>{

    test('Filters on BMW cars page', async({pages})=>{

        await pages.homepage.navigateToHomepage();
        await pages.homepage.findNewCars();
        await pages.newCarsPage.navigateToBmw();
        console.log(`Heading on BMW cars: ${await pages.bmwCarsPage.getText(allLocators.BMWCarsPage.bmwCarsHeading)}`)
        expect (await pages.bmwCarsPage.getText(allLocators.BMWCarsPage.bmwCarsHeading)).toBe('BMW Cars');

        await pages.bmwCarsPage.click(allLocators.BMWCarsPage.makeFilter);
        await pages.bmwCarsPage.click(allLocators.BMWCarsPage.allMakesFilter);
        await pages.bmwCarsPage.waitForTimeout(5000);
    
    })


})