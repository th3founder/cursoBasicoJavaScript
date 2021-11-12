/* Un auto es un objeto y tiene propiedades como marca,modelo,año,llantas,puertas,etc. */
var miAuto = {
    marca: "GMC",
    modelo: "Sierra AT4",
    annio: 2021,
    detalleDelAuto: function(){
        console.log(`Mi auto es ${this.modelo}, año ${this.annio}`);    
    }
};

/* This es una variable que hace referencia al objeto par leer el this.modelo seria igual a miAuto.modelo */

/* Maneras de imprimir el objeto */
console.log(miAuto); //todo el objeto
console.log(miAuto.marca ,",", miAuto.modelo) //alguna(s) propiedad(es) del objeto
console.log(miAuto.detalleDelAuto()); //Una funcion del objeto



//Crear mutos objetos
/* .......
.............
................
...................... */

function auto(marca,modelo,annio){ //Nuestro objeto es la funcion auto
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio
}

//new genera una instancia de un objeto derivado de otro objeto, es decir, crea un objeto a base de un molde padre
var autoNuevo = new auto("GMC","Sierra Denali",2022);

var autoNuevo2 = new auto("Chevrolet","Suburban",2021);5
