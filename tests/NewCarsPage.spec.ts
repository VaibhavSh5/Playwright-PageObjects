import {test, expect} from '../utils/test-base'
import locators from '../locators/locators.json'

test.describe('New cars page tests', ()=> {

    test.beforeEach('Navigating to the homePage', async({pages})=>{
        await pages.homepage.navigateToHomepage();

    })

    test('Navigating to different cars page', async({pages})=>{
        await pages.newCarsPage.navigateToTata();
        console.log(`Heading on Tata cars page: ${await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)}`)

        expect(await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)).toBe('Tata Cars');
        // await newcars.click(locators.TataCarsPage.makeFilter);
        await pages.newCarsPage.goBackPage();

        await pages.newCarsPage.navigateToHyundai();
        console.log(`Heading on Hyundai cars page: ${await pages.newCarsPage.getText(locators.HyundaiCarsPage.hyundaiCarsHeading)}`)
        expect(await pages.newCarsPage.getText(locators.HyundaiCarsPage.hyundaiCarsHeading)).toBe('Hyundai Cars');
        await pages.newCarsPage.goBackPage();

        await pages.newCarsPage.navigateToSkoda();
        console.log(`Heading on Skoda cars page: ${await pages.newCarsPage.getText(locators.SkodaCarsPage.skodaCarsHeading)}`)
        expect(await pages.newCarsPage.getText(locators.SkodaCarsPage.skodaCarsHeading)).toBe('Skoda Cars');
        await pages.newCarsPage.goBackPage();


        await pages.newCarsPage.navigateToBmw();
        console.log(`Heading on BMW cars page: ${await pages.newCarsPage.getText(locators.BMWCarsPage.bmwCarsHeading)}`)
        expect(await pages.newCarsPage.getText(locators.BMWCarsPage.bmwCarsHeading)).toBe('BMW Cars');
    })

})