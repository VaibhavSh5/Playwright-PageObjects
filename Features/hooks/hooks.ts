import {Before, After, AfterAll, BeforeAll} from '@cucumber/cucumber'

Before(function() {
    console.log("Before:: is called before each scenarios")

})

After(function(){
    console.log("After:: is called after each scenario")
})

BeforeAll(function(){
    console.log("Before:: is called once before all scenarios")
})

AfterAll(function(){
    console.log("AfterAll:: is called once after all scenarios")
})