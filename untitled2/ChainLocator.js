describe('Chain Locators', function () {

    function Calc(a,b,c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function (item) {

            item.getAttribute("value").then(function (values) {

                if (values == c) {

                    item.click();
                }
            })

        })

        element(by.id("gobutton")).click();



        }

        // it('Open Angular js website', function () {
        //
        //     browser.get("https://juliemr.github.io/protractor-demo/");
        //     element(by.model("first")).sendKeys(3);
        //     element(by.model("second")).sendKeys(3);
        //
        //
        //
        //     element(by.id("gobutton")).click();
        //
        //     expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");
        //
        //     element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
        //
        //
        //         console.log(text);
        //     })
        //
        // });
        //
        // it('Choosing different option inc Calc', function () {
        //
        //     browser.get("https://juliemr.github.io/protractor-demo/");
        //     element(by.model("first")).sendKeys(3);
        //     element(by.model("operator")).click().element(by.css("option:nth-child(2)")).click();
        //     element(by.model("second")).sendKeys(3);
        //     element(by.id("gobutton")).click();
        //     element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
        //
        //
        //         console.log(text);
        //     })
        //
        // });


        it('Choosing different option inc Calc2', function () {

            browser.get("https://juliemr.github.io/protractor-demo/");
            // element(by.model("first")).sendKeys(5);
            // element(by.model("operator")).click().element(by.css("option:nth-child(1)")).click();
            // element(by.model("second")).sendKeys(3);
            // element(by.id("gobutton")).click();
            //
            //
            // element(by.model("first")).sendKeys(10);
            // element(by.model("operator")).click().element(by.css("option:nth-child(1)")).click();
            // element(by.model("second")).sendKeys(3);
            // element(by.id("gobutton")).click();
            //
            //
            // element(by.model("first")).sendKeys(50);
            // element(by.model("operator")).click().element(by.css("option:nth-child(1)")).click();
            // element(by.model("second")).sendKeys(3);
            // element(by.id("gobutton")).click();


            // element(by.css("table[class='table'] tr:nth-child(2) td:nth-child(3)")).getText().then(function (text) {
            //
            //
            //     console.log(text);
            // })
            //
            // element(by.css("table[class='table'] tr:nth-child(1) td:nth-child(3)")).getText().then(function (text) {
            //
            //
            //     console.log(text);
            // })

            // element(by.css("table[class='table'] tr:nth-child(2)")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            //
            //     console.log(text);
            // })

            // element.all(by.repeater("result in memory")).count().then(function (text) {
            //     console.log(text);
            //
            // })
            Calc(10, 6, "DIVISION");
            Calc(10, 9, "MODULO");


            element.all(by.repeater("result in memory")).each(function (t) {
                t.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                    console.log(text);
                })
            })

        });

    })









