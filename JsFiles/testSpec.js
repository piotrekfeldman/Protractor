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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Chain locators demo', () => {
    it('Open website', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firstEditBox.sendKeys("6");
        //  await element(by.model("first")).sendKeys("6");
        yield calc.secondEditBox.sendKeys("3");
        // await element(by.model("second")).sendKeys("3");
        yield calc.go.click();
        protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
            expect(text).toBe("10");
            console.log(text);
        });
    }));
    it('Angular Home Page', () => __awaiter(void 0, void 0, void 0, function* () {
        let angular = new angularHomePage_1.angularHomePage;
        yield protractor_1.browser.get("https://angularjs.org/");
        yield angular.angularLink.click();
        yield angular.search.sendKeys("Piotr to Łotr");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSx5REFBc0Q7QUFDdEQsbUVBQWdFO0FBQ2hFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFFLEVBQUU7SUFHcEMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFPLEVBQUU7UUFFeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDNUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN6RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLG1EQUFtRDtRQUNuRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLG1EQUFtRDtRQUNuRCxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHdEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUVwRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVEsRUFBRTtRQUU5QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLENBQUM7UUFFbEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRW5ELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9