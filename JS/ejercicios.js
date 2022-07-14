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

// Funcion que compara la opcion del jugador con el numero aleatorio del juego 
function game(user, maq) {
    //console.log('usuario: ' + user);
    //console.log('maquina: '+ maq);
    if(user > maq){
        console.log('¡¡¡Felicidades ganaste!!!');
    } else if ( user < maq) {
        console.log('Suerte para la proxima...');
    } else 
        console.log('¡Empate!');
}

// Funcion que lanza el numero aleatorio para compararlo con el del jugador 
// se guarda en la variable num, se redondea con .round, al multiplicarlo por 3 nos da como resultado el: 0, 1, 2 y 3
// para compararlo con el numero que dio el usuario y asi pueda existir el que gane, empate o que pierda
function maquina(){
const num = Math.round(Math.random()*3) 
return num

}

// Ciclo del juego, se repite las veces que el usuario quiera jugar, y si se equivoca ingresando un valor no valido 
// no cambia el numero de juegos
do{
    for(let i = 1; i <= numeros_juego; i++){
        let opcion = prompt("Ingresa el numero de tu eleccion: \n1.Piedra \n2.Papel \n3.Tijera").toLocaleLowerCase();
        //alert("El usuario escogio " + opcion);
        
        switch (opcion) {
            case '1':
                game(1,parseInt(maquina()))
                console.log('El usuario escogio: Piedra');
                break;

            case '2':
                game(2,parseInt(maquina()))
                console.log('El usuario escogio: Papel');
                break;

            case '3':
                game(3,parseInt(maquina()))
                console.log('El usuario escogio: Tijera');
                break;

            default:
                console.log('Opcion no valida. \nIngresa un numero');
                i--;
                break;
        }
        // if (opcion == "tijera") {
        //     alert("Empate, vuelve a intentarlo");
        // }else if (opcion == "papel") {
        //     alert("¡Felicidades ganaste!");
        // } 
        // else {
        //     alert("¡Suerte para la proxima perdiste!");
        // }
    }
    
} while (inicio_juego == "SI");

console.log("Nombre de usuario " + nombre);
console.log("Cantidad de juegos: " + numeros_juego);



