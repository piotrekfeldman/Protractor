
interface vehicle{
    color:string,
    engine:number,
    camera?:boolean
}

let Audi=
{
    color:"red",
    engine:250,
    camera:true

}

function validateCar(v:vehicle){
    console.log(v.camera);
    console.log(v.engine);

}

validateCar(Audi);

// let cd=new classDemo(3);
// cd.setUsername("piotr");
// console.log(cd.getUsername());

function validate (value:string):void{
    console.log(value);
}

let obj=
{
    color:"red",
    engine:100,
}

obj.color;

validate("sraka");