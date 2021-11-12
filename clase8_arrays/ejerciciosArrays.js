/* Array Sorting -----------------*/
// sort | metodo para ordenar alfabeticamente los array con datos de tipo String
var numeros = ["azul","amarillo","rojo","naranja","verde"];
var orden = numeros.sort();
console.log("Numeros en orden",orden);

//Reverse | Inviete los elementos de un array empieza en 40 y termina en 10
var numbers = [10,30,20,15,40];
var ordenReversa = numbers.reverse();
console.log("Array de reversa",ordenReversa);

//Slice | Remueve los primeros elementos, toma el resto
var numeroSlice = [1,3,5,7,9,11];
var pedazo = numeroSlice.slice(3);//Remueve los primeros 3 elementos
console.log("Tome un pedazo y quedaron",pedazo);

var pastel = [13,23,33,43,53];  
var rebanada = pastel.slice(1,3);//Empezamos a quitar a partir del primer elemento hasta el tercero,
console.log(rebanada);//Solo imprime los valores que estan en el slice(); del 23 al 33

//Combination | Convinacion de dos arreglos
var x = [1,3,5,7,9,];
var y = [2,4,6,8,];
var z = x.concat(y);
console.log(z.sort());
