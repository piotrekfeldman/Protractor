describe('Protractor baby steps', function () {
    it('Locators', function () {

        browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys(3);
        element(by.model("second")).sendKeys(3);



        element(by.id("gobutton")).click().then(function () {
            browser.sleep(2000);
            element(by.css("h2[class='ng-binding']")).getText().then(function (text) {

                console.log(text);

            });

        })
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");


    });

})