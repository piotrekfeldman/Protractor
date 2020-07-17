describe('angularjs homepage todo list', function() {
    it('should add a todo', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');


        element(by.css("input[id*='confirm']")).click();
        browser.switchTo().alert().accept().then(function () {
            browser.sleep(5000);
            console.log("test");
        });

    });
})