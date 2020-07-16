describe('angularjs homepage todo list', function() {
    it('should add a todo', function () {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');

        browser.switchTo().frame(0);

        element(by.css("div[class='login-btn']")).click().then(function () {
            browser.sleep(5000);
        })



    });
});

let a = new Car();
console.log(a.brand);