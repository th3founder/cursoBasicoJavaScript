
if(true){
    console.log("Hola soy verdadero");
    //Imprime Verdadero
}


if(!true){
  console.log("Hola tambien soy verdadero");
  //No lo imprime porque lo estamos negando  
}else{
    console.log("Soy falso")
    //Imprime esto
}

var edad = 17;
if(edad === 18){
    console.log("Puedes votar es tu primera vez");
}else if(edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes vota");
    //Imprime esto
}

//Operador ternario, generar un if y un else en una sola linea
/* condition ? true : false; */
var numero = 1;
var numero2 = 11;

var resultado = numero === 1 ? console.log("Si eres un uno"): console.log("No soy uno");
var resultado2 = numero2 === 10 ? "Eres un 10": "No lo eres";
console.log(resultado2);


