import {test, expect} from '../utils/test-base'
import locators from '../locators/locators.json'
import { readCSVData } from '../utils/csv-parse'

test.describe('New cars page tests', ()=> {

    const csvData = readCSVData('data/cars_data.csv');

    test.beforeEach('Navigating to the homePage', async({pages})=>{
        await pages.homepage.navigateToHomepage();

    })

    test('Navigating to different cars page', async({pages})=>{
        await pages.newCarsPage.navigateToTata();
        console.log(`Heading on Tata cars page: ${await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)}`)

        expect(await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)).toBe('Tata Cars');
        await pages.newCarsPage.click(locators.TataCarsPage.makeFilter);
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


    test('Parameterized navigation to different cars page', async({pages})=>{

        for await (const data of csvData) {
            await pages.homepage.findNewCars();

            if(data.Cars == "BMW"){
                await pages.newCarsPage.navigateToBmw();
                console.log(`Heading on BMW cars page: ${await pages.newCarsPage.getText(locators.BMWCarsPage.bmwCarsHeading)}`)
                expect(await pages.newCarsPage.getText(locators.BMWCarsPage.bmwCarsHeading)).toBe('BMW Cars');

            }else if(data.Cars == "Skoda"){
                await pages.newCarsPage.navigateToSkoda();
                console.log(`Heading on Skoda cars page: ${await pages.newCarsPage.getText(locators.SkodaCarsPage.skodaCarsHeading)}`)
                expect(await pages.newCarsPage.getText(locators.SkodaCarsPage.skodaCarsHeading)).toBe('Skoda Cars');

            }else if (data.Cars == "Hyundai"){
                await pages.newCarsPage.navigateToHyundai();
                console.log(`Heading on Hyundai cars page: ${await pages.newCarsPage.getText(locators.HyundaiCarsPage.hyundaiCarsHeading)}`)
                expect(await pages.newCarsPage.getText(locators.HyundaiCarsPage.hyundaiCarsHeading)).toBe('Hyundai Cars');
            
            }else if (data.Cars == "Tata"){
                await pages.newCarsPage.navigateToTata();
                console.log(`Heading on Tata cars page: ${await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)}`)

                expect(await pages.newCarsPage.getText(locators.TataCarsPage.tataCarsHeading)).toBe('Tata Cars');
            }

            const actual_Title = await pages.carsBasePage.getCarsTitle();
            expect(actual_Title, `Expected title to be ${data.Title} but found ${actual_Title}`).toBe(data.Title);
        }
    })


    test('Parametrized navigation to different cars page along with their cars and values', async({pages})=>{

        for await(const data of csvData){
            
            await pages.homepage.findNewCars();

            switch (data.Cars){

                case "BMW":
                    await pages.newCarsPage.navigateToBmw();
                    const actualTitleBMW = await pages.carsBasePage.getCarsTitle();
                    expect(actualTitleBMW, `Expected title to be ${data.Title} but found ${actualTitleBMW}`).toBe(data.Title)
                    break;
                
                case "Skoda":
                    await pages.newCarsPage.navigateToSkoda();
                    const actualTitleSkoda = await pages.carsBasePage.getCarsTitle();
                    expect(actualTitleSkoda, `Expected title to be ${data.Title} but found ${actualTitleSkoda}`).toBe(data.Title)
                    break;
                
                case "Tata":
                    await pages.newCarsPage.navigateToTata();
                    const actualTitleTata = await pages.carsBasePage.getCarsTitle();
                    expect(actualTitleTata, `Expected title to be ${data.Title} but found ${actualTitleTata}`).toBe(data.Title)
                    break;
                
                case "Hyundai":
                    await pages.newCarsPage.navigateToHyundai();
                    const actualTitleHyundai = await pages.carsBasePage.getCarsTitle();
                    expect(actualTitleHyundai, `Expected title to be ${data.Title} but found ${actualTitleHyundai}`).toBe(data.Title)
                    break;

                default:
                   throw new Error("Car doesn't exists!!"); 
            }

            if(data.Cars != "Tata"){

                const carInformationSize = ((await pages.carsBasePage.getCarNamesAndPrices()).length);
                console.log(`The number of information returned for ${data.Cars}: ${carInformationSize}`)

                const carsInfo = await pages.carsBasePage.getCarNamesAndPrices();

                for (let i=0; i<carInformationSize; i++){

                    const carName = carsInfo[i].name;
                    const carPrice = carsInfo[i].price;
                    console.log(`Car name: ${carName} and price is: ${carPrice}`)
                }
            }
        }
    })
})