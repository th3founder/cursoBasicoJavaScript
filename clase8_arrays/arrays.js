var frutas = ["Manzana","Platano","Fresa","Aguacate",];

console.log(frutas); //Imprimimos el array
console.log(frutas.length);//Visualizar longitud del array

var otraFruta = frutas.push("Pera"); //Metodo 1: Push | de agregar elementos al array
console.log(frutas); //Imprimimos el array

var quitarUltimo = frutas.pop("Pera"); //Metodo 2: Pop | Quita el ultimo elemento del array
console.log(frutas);

var nuevaLongitud = frutas.unshift("Mora Azul");//Metodo 3: unshift | Agrega elemento pero al inicio del array
console.log(frutas);

var borrarFurta = frutas.shift("Uvas");//Metodo 4: shift | Borramos el primer elemento de una rray
console.log(frutas);

var posicion = frutas.indexOf("Fresa");//Metodo 5: indexOf | Ayuda a encontrar la posicion del elemento
console.log(posicion);


console.table(frutas);//Mostrar el array o objetos de una major manera
