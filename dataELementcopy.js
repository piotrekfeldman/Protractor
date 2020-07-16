const data = require("./data.js");

describe('angularjs homepage todo list', function() {
    var obj = require("./JsFiles/pageObjects/calc2.js");
    var d = require("./data.js");
    var using = require("jasmine-data-provider");

beforeEach(function () {
    obj.url();
    

})

    // it('should add a todo', function () {
    //         obj.url();

    //     obj.firstEditBox.sendKeys("6");
    //     obj.secondEditBox.sendKeys("5");
    //     obj.go.click().then(function () {
    //         browser.sleep(5000);
    //     })
    //     expect(obj.getResult.getText()).toBe("11");

    // });

    it('should add a todo2', function () {

        obj.firstEditBox.sendKeys("6");
        obj.secondEditBox.sendKeys("600");
        obj.go.click().then(function () {
            browser.sleep(5000);
        })
        expect(obj.getResult.getText()).toBe("606");

    });




// afterEach(function (scenario) {

//     if(scenario.result.status == Status.ExpectationFailed);
//     var screen = browser.takeScreenshot();
//     this.attach(screen, "image/png");
// })
})