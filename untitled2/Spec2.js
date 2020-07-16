describe('Protractor baby steps', function () {
    it('Basic program', function () {
        var a = 5;
        var b =" fiutów";

        console.log(a+b);


    });
    it('Basic program', function () {
        var a = 5;
        var b =" fiutów";

        console.log(a+b);


    });

    function add(a,b) {

        return a + b;

    }

    it('Basic program', function () {
        console.log(add(5,5))



    });

    var b = ["hello","world", "4", "goodbye"];

    var d = new Array();

    d[0] = "1";
    d[1] = "2";
    d[2] = "3";
    d[3] = "cztery";

    for(var j = d.length-1 ; j >= 0 ; j--){

        console.log(d[j]);
    }

    for(var k = 0 ; k < d.length ; k++){


        console.log(d[k]);
    }

})