"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var Audi = {
    color: "red",
    engine: 250,
    camera: true
};
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
validateCar(Audi);
var cd = new classDemo_1.classDemo(3);
cd.setUsername("piotr");
console.log(cd.getUsername());
function validate(value) {
    console.log(value);
}
var obj = {
    color: "red",
    engine: 100
};
obj.color;
validate("sraka");
