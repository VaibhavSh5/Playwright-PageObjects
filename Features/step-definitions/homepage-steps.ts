import {Given, When , Then} from '@cucumber/cucumber'

Given('the user is on Homepage', function () {
        console.log('the user is on Homepage')
         });
       
When('user hovers on the New Cars option', function () {
            console.log('the user hovers on the New Cars option')
         });
When('clicks on the Find New Cars option', function () {
        console.log('the user clicks on the Find New Cars option')
         });
       
Then('they are directed to the New Cars page', function () {
            console.log('they are directed to the New Cars page')
         });