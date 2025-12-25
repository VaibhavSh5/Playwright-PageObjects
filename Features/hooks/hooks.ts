import {Before, After, AfterAll, BeforeAll, Status} from '@cucumber/cucumber'
import { CustomWorld } from './world'
import path from 'path'
import fs from 'fs'

Before(async function(this: CustomWorld) {
    console.log("Before:: is called before each scenarios")
    await this.init();

})

After(async function(this: CustomWorld){
    console.log("After:: is called after each scenario")
    await this.close();
})

After(async function(this: CustomWorld, scenario){

    const timeStamp = new Date().toISOString();

    if(scenario.result?.status == Status.FAILED && this.page){
        const screenshotPath = path.resolve(__dirname, '../..', `screenshots/${timeStamp}.png`)
        if(!fs.existsSync(path.dirname(screenshotPath))){

            fs.mkdirSync(path.dirname(screenshotPath), {recursive: true});
        } 

        await this.page.screenshot({path: screenshotPath, fullPage: true})   
        
        const imageBuffer = fs.readFileSync(screenshotPath);
        this.attach(imageBuffer, 'image/png');
    }


})

// BeforeAll(async function(){
//     console.log("Before:: is called once before all scenarios")
// })

// AfterAll(async function(){
//     console.log("AfterAll:: is called once after all scenarios")
// })