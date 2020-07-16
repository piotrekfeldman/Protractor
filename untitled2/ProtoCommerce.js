describe('angularjs homepage todo list', function() {

    function selectItem(product) {
        element.all(by.tagName("app-card")).each(function (item) {
            item.element(by.css("h4 a")).getText().then(function (text) {
            var phone = text;
                if(text ==product){
                    item.element(by.css("button[class*='btn-info']")).click();
                    console.log("Wybrany produkt: " + text);
                }
                
            })
        }).then(function () {
            browser.sleep(5000);
        })


    }
    it('should add a todo', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name("name")).sendKeys("Peter");
        element(by.name("email")).sendKeys("peterfeldman@gmail.com");
        element(by.name("email")).sendKeys("peterfeldman@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("peterfeldman@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("peterfeldman@gmail.com");
        element(by.className("form-check-input")).click();
        element(by.cssContainingText("select[class='form-control'] option", "Female")).click();
        element.all(by.className("form-check-input")).first().click();
        element(by.buttonText("Submit")).click().then(function () {

            element(by.css("div[class*='success']")).getText().then(function (text) {

                // expect(text).toBe("× Success! The Form has been submitted successfully!.");
                expect(text).toContain("Success");
                console.log(text);
            })
        })

        element(by.linkText("Shop")).click();

        selectItem("iphone X");
        selectItem("Nokia Edge");

        element(by.partialLinkText("Checkout")).getText().then(function (text) {
            var res = text.split("(");
            var x = Number(res[1].trim().charAt(0));

            var y= x + 1;
            console.log(x);

        })

        element(by.partialLinkText("Checkout")).click();
        element.all(by.css("tr td:nth-child(4)")).getText().then(function (text) {
                console.log(text);
        });

        // element.all(by.css("tr td:nth-child(4)")).getText().then(function (text) {
        //     var c = Number(text.charAt(1));
        //     console.log(c);
        //
        //     // if(text.charAt(1) == "₹") {
        //     //
        //         var a = text.split(".");
        //         var b = a[1].trim();
        //     //     console.log(b);
        //     // }
        // });
        element.all(by.css("tr td:nth-child(4)")).each(function (item) {
            item.getText().then(function (text) {
                if(text.charAt(0)=="₹")
                {
                    var a = text.split(".");
                    var b = Number(a[1].trim());
                    console.log("Trimmed : "+b);

                    

                    console.log(n);
                }

            })

        })


    // webdriver-manager start
    })
})