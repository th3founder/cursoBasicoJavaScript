var miAuto = {
    marca: "GMC",
    modelo: "Sierra AT4",
    annio: 2021,
    detalleDelAuto: function(){
        console.log(`Mi auto es ${this.modelo}, año ${this.annio}`);    
    }
};

/* This es una variable que hace referencia al objeto par leer el this.modelo seria igual a miAuto.modelo */

console.log(miAuto);
console.log(miAuto.marca ,",", miAuto.modelo)
console.log(miAuto.detalleDelAuto());