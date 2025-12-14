import {Page} from '@playwright/test'
import { Homepage } from '../pages/Homepage'
import { NewCarsPage } from '../pages/NewCarsPage';
import { TataCarsPage } from '../pages/TataCarsPage';
import { HyundaiCarsPage } from '../pages/HyundaiCarsPage';
import { SkodaCarsPage } from '../pages/SkodaCarsPage';
import { BMWCarsPage } from '../pages/BMWCarsPage';


export class PageFixtures{

    readonly homepage: Homepage;
    readonly newCarsPage: NewCarsPage;
    readonly tataCarsPage: TataCarsPage;
    readonly hyundaiCarsPage: HyundaiCarsPage;
    readonly skodaCarsPage: SkodaCarsPage;
    readonly bmwCarsPage: BMWCarsPage;
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
        this.homepage = new Homepage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.tataCarsPage = new TataCarsPage(page);
        this.hyundaiCarsPage = new HyundaiCarsPage(page);
        this.skodaCarsPage = new SkodaCarsPage(page);
        this.bmwCarsPage = new BMWCarsPage(page);
    }

    get basePage(): Page{
        return this.page;
    }
}