"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let calc = new calculator_1.calculator();
    yield protractor_1.browser.manage().window().maximize();
    protractor_1.browser.waitForAngularEnabled(false);
    if (string == "calc") {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == "angularjs") {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_1.browser.sleep(6000);
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    let calc = new calculator_1.calculator();
    // browser.waitForAngularEnabled(false);
    yield calc.firstEditBox.sendKeys(string);
    //  await element(by.model("first")).sendKeys("6");
    yield calc.secondEditBox.sendKeys(string2);
    console.log("testowy");
    // await element(by.model("second")).sendKeys("3");
}));
cucumber_1.Then('The output should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let calc = new calculator_1.calculator();
    //  var EC = protractor.ExpectedConditions;
    //  var textOutput = calc.getResult.getText();
    // EC.textToBePresentInElementValue(textOutput);
    yield calc.go.click();
    var EC = protractor_1.protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be no longer visible on the dom.
    protractor_1.browser.wait(EC.visibilityOf(calc.getResult), 8000);
    // await browser.sleep(5000);
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
        console.log(text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQTJGO0FBQzNGLDBEQUF1RDtBQUV2RCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUdoQixnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDeEQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckMsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ2xCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDMUQ7U0FDSSxJQUFHLE1BQU0sSUFBRSxXQUFXLEVBQzNCO1FBQ0UsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7QUFFQSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3ZFLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLHdDQUF3QztJQUd4QyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLG1EQUFtRDtJQUNuRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsbURBQW1EO0FBRW5ELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUVuRCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUU1QiwyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUN2QywwRUFBMEU7SUFDNUUsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsNkJBQTZCO0lBQzVCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEIsQ0FBQyxDQUFDLENBQUE7QUFFRixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=