//JUEGO
let numeroMaquina = Math.floor(Math.random()*(10-1)-1);
console.log(numeroMaquina)

//Pido al usuario un número, y paso el string a un número con parseInt (NOTA: prompt guarda el dato en string)
let numeroUser = parseInt(prompt("Adivina el numero entre 1 y 10"));
let vidas = 5;
    //True && True --> entras al while
while(numeroMaquina !== numeroUser && vidas > 1){
    vidas--;
    numeroUser=parseInt(prompt("Numero incorrecto, intentalo nuevamente, Tus vidas son: "+ vidas))
} 
//Si el usuario acierta o se queda sin vidas, se sale del while 
if(numeroMaquina === numeroUser){
    console.log("Ganaste");
    alert("Ganaste");
}else{
    console.log("Perdiste");
    alert("Perdiste");
}