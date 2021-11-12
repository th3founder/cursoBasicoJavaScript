var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"
console.log("Escoja una de estas 3 opciones: ",piedra,",",papel,",",tijera);

function ppt(turno1,turno2){
    if(turno1 === turno2){
        console.log("Empate, escogieron la misma opción, repitanlo");
    }else if((turno1 === piedra && turno2 === tijera) || (turno1 === papel && turno2 === piedra) || (turno1 === tijera && turno2 === papel)){
        console.log("Ganar el turno 1");
    }else{
        console.log("Ganar el turno 2");
    }
}