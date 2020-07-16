import {browser, element, by, By, $, $$, ExpectedConditions} from "protractor";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";
describe('Chain locators demo', ()=>{


it('Open website', async()=>{

    let calc = new calculator();
    browser.get("http://juliemr.github.io/protractor-demo/");
    await calc.firstEditBox.sendKeys("6");
  //  await element(by.model("first")).sendKeys("6");
  await calc.secondEditBox.sendKeys("3")
    // await element(by.model("second")).sendKeys("3");
    await calc.go.click();


    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
    {
        expect(text).toBe("10");
        console.log(text);
    })


})
it('Angular Home Page' ,async ()=>{

    let angular = new angularHomePage;

    await browser.get("https://angularjs.org/");
    await angular.angularLink.click();
    await angular.search.sendKeys("Piotr to Łotr");

})
})
