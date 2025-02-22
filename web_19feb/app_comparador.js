//COMPARA DOS NÚMEROS
let dato1 = parseInt(prompt("Ingresa tu primer numero"));
let dato2 = parseInt(prompt("ingresa tu segundo numero"));

if(dato1>dato2){
    console.log("Dato1 es mayor que Dato2. El valor de Dato1 es: "+ dato1);
}else if (dato2>dato1){
    console.log("Dato2 es mayor que Dato1. El valor de Dato2 es: "+ dato2);
}else if(dato1 == dato2){
    console.log("Los datos son iguales")
}

