var estudiantes = ["Alvaro","Angel","Cesar","Daniel"];
var numeros = [1,2,3,4,5,6,7,8,9,10];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

/* Ciclo For.....
..............
......... */

for(var index = 0; index<estudiantes.length ; index++){
    console.log(estudiantes[index]);
}

for(var index = 0; index<estudiantes.length ; index++){
    saludarEstudiantes(estudiantes[index]);
}

/* Ciclo For of.....
..............
......... */
/* 
El for of, lo que hace es separa cada elemento del array y lo imprime.
*/
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

for (const numeroxs of numeros) {
    console.log("Estamos imprimiento el numero: ",numeroxs);
}



/* Ciclo while.....
..............
......... */

const jedis = ["Anaky","Yoda","Kenobi","Windu","Asoka"];

function saludoMaestro(jedi){
    console.log(`Saludos, ${jedi}`);
}

while (jedis.length>0) {
    console.log(jedis)
    var maestroJedi = jedis.shift();
    saludoMaestro(maestroJedi);
}

/* ....................................... */
const netWorth = ["$1M","$50M","$250M","$560M","$900M","$2.2B"];

function mensajeNetworth(patrimonio){
    console.log(`El patrimonio de alvaro fue de ${patrimonio}`);
}

while (netWorth.length > 0) {
    console.log(netWorth)
    var patrimonio = netWorth.shift();
    mensajeNetworth(patrimonio)
}


/* Practica de sumador en un array */
const contenedor = [];
console.log(contenedor);

var userInput = prompt("Ingrese un numero");

for (let index = 1; index <= userInput; index++) {
    let userInput2 = Number(prompt(`Inrese un numero en la caja ${index}`));
    console.log(userInput2);
    if(contenedor.length === 0){
        contenedor.push(userInput2);
    }else{
        contenedor.push(userInput2+contenedor[contenedor.length-1]);
    }
}
console.log(contenedor);
console.log("$",contenedor[contenedor.length-1]);