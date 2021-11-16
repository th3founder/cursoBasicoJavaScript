//Crear una funcion constructora que haga carros
//Crear un bucle que construya 30 carros que se construyan solos, sino que se use el loop para que se puedan generar nuevas instancias

//Creamos nuestra función constructor
function generalMotors (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Creamos nuestros modelos
const almacen = []; //Aqui guardaremos los vehiculos
var models = ["Sierra AT4","Sierra Denali","Yukon"]; //Modelos que manejaremos
var annioModel = [2019,2021,2022]; //Año del modelo que manejaremos

//Iniciamos la producción
for (let index = 1; index <= 30; index++) {

    //Creamos variables aleatorias para que los automoviles se produzcan en diferente modelo y año
    var aleatorioModels = Math.floor(Math.random()*models.length);
    var aleatorioAnnio = Math.floor(Math.random()*annioModel.length);

    //enzamblamos y agregamos cada carro nuevo a nuestro almacen
    almacen.push(new generalMotors("GMC",models[aleatorioModels],annioModel[aleatorioAnnio]));
}

//Vemos nuestro almacen
console.log(almacen)


//Usamos Filter..................
var annioPickUp = almacen.filter(function(vehiculo){
    return vehiculo.annio > 2021;  //cuando llamemos el atributo .annio debe ser como esta constuido en el constuctor no el array que lo cotiene
})
console.log("Las camionetas ultimo año son",annioPickUp);
/* Retorna: todos los vehiculos mayores a 2021
*/

var modeloAhora = almacen.filter(function(vehiculo){
    return vehiculo.modelo === "Yukon";  //cuando llamemos el atributo .annio debe ser como esta constuido en el constuctor no el array que lo cotiene
})
console.log("Las camionetas existentes son",modeloAhora);
/* Retorna: todos las camionetas llamadas Yukon*/


//Usamos map..................
var mapeoPickUps = almacen.map(function(vehiculo){
    return vehiculo.modelo;
})
console.log("El mapeo existente de modelos es: ",mapeoPickUps);
/* Retorna: todos las camionetas por modelo*/


