/* Para la declaracion se variables se puede usar let, var, const.
prompt();  Se usa para ingresar datos
alert();    Se usa para mostrar datos en una ventana emergente
parseInt();  Se usa para convertir un string a entero
parseFloat();   Para convertir un string a flotante
*/


// entrada de datos 
let nombre = prompt("Ingresa tu nombre: ");
let numeros_juego = parseFloat(prompt("¿Cuantas veces quieres jugar?"));
let inicio_juego;

do{
    for(let i = 1; i <= numeros_juego; i++){
        let opcion = prompt("Piedra... papel o tijera?").toLocaleLowerCase();
        alert("El usuario escogio " + opcion);
        if (opcion == "tijera") {
            alert("Empate, vuelve a intentarlo");
        }else if (opcion == "papel") {
            alert("¡Felicidades ganaste!");
        } 
        else {
            alert("¡Suerte para la proxima perdiste!");
        }
    }
    


} while (inicio_juego == "SI");

console.log("Nombre de usuario " + nombre);
console.log("Cantidad de juegos: " + numeros_juego);


