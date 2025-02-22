// ESTRUCTURAS DE CONTROL

/* if (condicion){
    ejecuta algo si la condicion es true
}
fin del programa

if (condicion){
    ejecuta algo si la condicion es true
}else{
    ejecuta algo si la condicion es false

} */
//-----------------------------------IF-ELSE-------------------------------------------------
/* let palabra = prompt("Ingresa en nombre de tu escuela");
if(palabra == "UNAM"){
    console.log("palabra correcta")
}else{
    console.log("Error")
} */
//-------------------------------------(OPERADOR ==)------------------------------------------
//Si el numero es 10, me imprime bien y el tipo es un string, si no es 10, no hace nada
/* let numero = prompt("Ingresa un numero");
if(numero==10){
    console.log("Bien ")
    console.log(typeof numero)
}  */
//-----------------------------------(OPERADOR ===)---------------------------------------------
/* let dato = prompt("Ingresa un dato");
if(dato===10){
    console.log("Bien ")
}else{
    console.log("No se puede porque es:" +typeof dato);
} */
//Validar typeof
/* let dato = parseInt(prompt("Ingresa un dato"));
if(dato===10){
    console.log("Bien ")
}else{
    console.log("No se puede porque es:" +typeof dato);
} */
//------------------------------------(SWITCH)----------------------------------------------
/* let opcionUser = prompt(`
        Elija una opcion:
        1.- Libro
        2.- Pelicula
        3.- Juego
    `);
switch(opcionUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
            console.log("Matrix");
            break
    case "3":
            console.log("AOE");
            break
    default:
        console.log("Opcion no valida");
        break
} */
//--------------------------------------(WHILE)--------------------------------------------
/* let numero = 0;
while(numero <=10){
    console.log("Numero = "+numero); //muestro en la consola el valor actual de la variable "numero"
    numero++; // Al final de cada iteración "numero" aumenta en 1
}    */
//------------------------------(Tabla del 1)--------------------------------------------------
/* let numero = 1;
while(numero <=10){
    console.log("1*" +numero + "=" + (1*numero));
    numero++;
} */





