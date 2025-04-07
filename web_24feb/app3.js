function suma(n1,n2){
    return parseInt(n1)+parseInt(n2);

}

let numero1= prompt("Ingrese un primer numero: ");
let numero2= prompt("Ingrese un segundo numero: ");

let resultado = suma(numero1, numero2);

console.log("El total de la suma es de: " + resultado);

//Una funcion que haga suma, resta, multiplicacipn, division y residuo

//resta
function resta(n1,n2){
    return parseInt(n1)-parseInt(n2);

}
let resultado2 = resta(numero1, numero2);
console.log("El total de la resta es de: " + resultado2);

//multiplicación
function mult(n1,n2){
    return parseInt(n1)*parseInt(n2);

}
let resultado3 = mult(numero1, numero2);
console.log("El total de la multiplicacion es de: " + resultado3);

//división
function div(n1,n2){
    return parseInt(n1)/parseInt(n2);

}
let resultado4 = div(numero1, numero2);
console.log("El total de la division es de: " + resultado4);

//residuo
function resi(n1,n2){
    return parseInt(n1)%parseInt(n2);

}
let resultado5 = resi(numero1, numero2);
console.log("El total de la division es de: " + resultado5);

