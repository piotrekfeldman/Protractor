describe('angularjs homepage todo list', function() {
    var obj = require("./pageObjects/calculatorObjects.js");


beforeEach(function () {
    obj.url();

})

    it('should add a todo', function () {

        obj.firstEditBox.sendKeys("6");
        obj.secondEditBox.sendKeys("5");
        obj.go.click().then(function () {
            browser.sleep(5000);
        })
        expect(obj.getResult.getText()).toBe("11");

    });

it('should add a todo2', function () {

        obj.firstEditBox.sendKeys("5");
        obj.secondEditBox.sendKeys("4");
        obj.go.click().then(function () {
            browser.sleep(5000);
        })
        expect(obj.getResult.getText()).toBe("11");

    });
afterEach(function (scenario) {

    if(scenario.result.status == Status.ExpectationFailed);
    var screen = browser.takeScreenshot();
    this.attach(screen, "image/png");
})
})