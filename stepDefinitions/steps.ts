import {Given, When, Then} from "cucumber";
import {browser, element, by, By, $, $$, ExpectedConditions, protractor} from "protractor";
import { calculator } from "../pageObjects/calculator";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";
var expect = chai.expect;

   
         Given('I will navigate to {string} Site', async(string)=> {
          let calc = new calculator();
          await browser.manage().window().maximize();
          browser.waitForAngularEnabled(false);
          
          if(string=="calc"){
          browser.get("http://juliemr.github.io/protractor-demo/");
        }
        else if(string=="angularjs")
        {
          await browser.get("https://angularjs.org/");
          await browser.sleep(6000);
        }

         });
         

         When('I add two numbers {string} and {string}', async(string, string2)=> { 
          let calc = new calculator();
          // browser.waitForAngularEnabled(false);

         
          await calc.firstEditBox.sendKeys(string);
          //  await element(by.model("first")).sendKeys("6");
          await calc.secondEditBox.sendKeys(string2);
          console.log("testowy");
            // await element(by.model("second")).sendKeys("3");

            });

            Then('The output should be {string}', async(string)=> {
             
              let calc = new calculator();

              //  var EC = protractor.ExpectedConditions;
              //  var textOutput = calc.getResult.getText();
              // EC.textToBePresentInElementValue(textOutput);
              await calc.go.click();
              var EC = protractor.ExpectedConditions;
              // Waits for the element with id 'abc' to be no longer visible on the dom.
            browser.wait(EC.visibilityOf(calc.getResult), 8000);
             // await browser.sleep(5000);
              await calc.getResult.getText().then(function(text)
              {
                expect(text).to.equal(string);
                  console.log(text);

              })

              });

              
             
               