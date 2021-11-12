//Declarativas
function miFuncion(){
    return 3;
}

//Expresion
var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

//Multiplicacion
var miMulti = function(a,b){
    var rest = a * b;
    return rest;
}
miMulti(2,5);

//Plantilla de cadena de texto, variables en un string
function saludar(alumno){
    console.log(`Hola ${alumno}`);

}

function suma(a,b){
    let resultado = a+b;
    return resultado;
}
suma(1,2);
console.log(suma(5,3));




var nombre = prompt("cual es tu nombre?: ");

namelix(nombre);
function namelix(nombre){
    if(nombre==="alvaro"){
        console.log("Eres tu");
    }else{
        console.log("No eres tu");
    }
}


function calculos(num1,num2){
    var cal1 = num1*num2;
    var cal2 = num1+num2;
    var cal3 = num1 - num2;
    console.log(cal1,cal2,cal3);
}


function apagado(){
    return "Todo esta desactivado";
    
}