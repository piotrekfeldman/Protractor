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
using (d.DataDriven, function(data, description) {
    it('should add a todo2'+data, function () {

        obj.firstEditBox.sendKeys(data.first);
        obj.secondEditBox.sendKeys(data.second);
        obj.go.click().then(function () {
            browser.sleep(5000);
        })
        expect(obj.getResult.getText()).toBe(data.result);
            console.log(data.result);

    });


});

// afterEach(function (scenario) {

//     if(scenario.result.status == Status.ExpectationFailed);
//     var screen = browser.takeScreenshot();
//     this.attach(screen, "image/png");
// })
})