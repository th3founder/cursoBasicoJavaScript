/* var numero = Number(prompt("Ecoge 1 o 2"));
switch (numero){
    case 1:
        console.log("Soy uno");
        break; //No permite que siga a los siguientes pasos, si se cumple la condicion finaliza el switch
    case 2:
        console.log("Soy dos");
        break;
    case 10:
        console.log("Soy X");
        break;
    default: //else, si ninguna de las condiciones se cumplio
        console.log("Vuelva a intentarlo");
}
 */

var inputUser = prompt("Ingrese piedra,papel o tijera").toLowerCase();
var options = ["piedra","papel","tijera"];
var machine = options[Math.floor(Math.random()*3)];
console.log(inputUser);
console.log(options);
console.log(machine);

function rockPaperScissors(user,machine){
    switch(true){
        case (user === machine):
            console.log("Empate");
            break;

        case ((user === "piedra" && machine === "tijera") || (user === "papel" && machine === "piedra") || (user === "tijera" && machine === "papel")):
            console.log("Gana el usuario al escoger",user);
            break;

        case ((machine === "piedra" && user === "tijera") || (machine === "papel" && user === "piedra") || (machine === "tijera" && user === "papel")):
            console.log("Gana la compu al escoger",machine);
            break;
    
        default:
            console.log("Caracter invalido");
            break;
    };
}
rockPaperScissors(inputUser,machine);



