
function Car()
{
    this.colour = "red";
    this.engine = "diesel";
    this.brand = "BMW";

    this.getModel= function()
    {
        console.log("2020 model");
    }
}


// var a = new Car();
// console.log(a.colour);
// console.log(a.brand);

module.exports = new Car();
