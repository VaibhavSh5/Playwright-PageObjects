import { Given, When, Then } from "@cucumber/cucumber";
        
Given('the user is on the cars Homepage', function () {
        
    console.log('the user is on the carswale Homepage')
         });
        
       
When('the user hover on the New cars', function () {
    console.log('the user hovers on the New cars option')
         });
        
       
When('user click on the Find New Cars link', function () {
    console.log('user click on the Find New Cars link')
         });
       
Then('user is redirected to the New Cars page', function () {
    console.log('user is redirected to the New Cars page')
         });
         
Then('user clicks on the {string} link', function (string) {
    console.log(`user clicks on the ${string} link`)
         });
       
Then('user is redirected to the {string} page', function (string) {
    console.log(`user is redirected to the ${string} page`)
         });