import {World, IWorldOptions, setWorldConstructor} from '@cucumber/cucumber'
import {Page, Browser, chromium} from 'playwright'
import { PageFixtures } from '../../fixtures/page-fixtures';


export class CustomWorld extends World{

    public browser!: Browser;
    public page!: Page;
    public pages!: PageFixtures;


    constructor(options: IWorldOptions){
        super(options);
    }

    async init(){

        this.browser = await chromium.launch({
            headless: false
        })
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        this.pages = new PageFixtures(this.page);
        await this.page.setViewportSize({width: 1920, height: 1080});
    }

    async close(){
        try {
            if (this.page && !this.page.isClosed()) {
                await this.page.close();
            }
            if (this.browser && this.browser.isConnected()) {
                await this.browser.close();
            }
        } catch (error) {
            console.log('Error during cleanup:', error);
        }
    }
}

setWorldConstructor(CustomWorld);