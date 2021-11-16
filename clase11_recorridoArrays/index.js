var articulos = [
    {nombre: "Bici",costo: 3000},
    {nombre: "Tv",costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

//Creremos un metodo que nos ayude a crear filtrar o recorrer el contenido del array

/* Filer, ayuda a filtar, valida si algo es verdad o falso y lo ingresara en un nuevo array, pero no modificara el array original */
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

console.log(articulosFiltrados); 
/* (2) [{…}, {…}]
0: {nombre: 'libro', costo: 320}
1: {nombre: 'Teclado', costo: 500} */ 



/* Map, ayuda a mapear los articulos y genera un nuevo array sin modificar el original */
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

console.log(nombreArticulos);
/* Retorna:
(7) ['Bici', 'Tv', 'libro', 'celular', 'laptop', 'Teclado', 'Audifonos']
0: "Bici"
1: "Tv"
2: "libro"
3: "celular"
4: "laptop"
5: "Teclado"
6: "Audifonos"
 */


//Metodos Arrays con .find(), .forEach() y .some()
var articulos2 = [
    {nombre: "Bici",costo: 3000},
    {nombre: "Tv",costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//Find: ayuda a enconrar algo adentro de un arreglo, este metodo no modifica el array original, sino generara uno nuevo con el valor que se le pide si lo encuentra con un true o false

var encuentraArticulo = articulos2.find(function(articulo){
    return articulo.nombre === "laptop"
})
console.log("Imrpimiendo con find",encuentraArticulo); //Solo contiene el primer elemento que tiene, si encuntra mas,no los traera

//for-each
/* No genera un nuevo array, hace el filtrado sobre el mismo array sin modificarlo y regresara cosas */
articulos2.forEach(function(articulo){
    console.log("el articulo con for-each es:",articulo.nombre);//Imprime cada articulo
});

//sonme
/* Validacion de verdadero o falsos para articulos que cumplan con esa validacion, en este se genera un nuevo array */
var articulosBaratos = articulos2.some(function(articulo){
    return articulo.costo <= 2500;
});

console.log("Imprimiendo con some",articulosBaratos);//Solo retorna verdadero o falso

if(articulosBaratos == true){
    console.log("Baratos");
}else{
    console.log("No hay")
}
