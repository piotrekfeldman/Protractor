function CalculatorObjects()
{
    this.url = function () {
        browser.get("http://juliemr.github.io/protractor-demo/");

    };
    this.firstEditBox= element(by.model("first"));
    this.secondEditBox=element(by.model("second"));
    this.go=element(by.id("gobutton"));
    this.getResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
}


// var a = new Car();
// console.log(a.colour);
// console.log(a.brand);

module.exports = new CalculatorObjects();