//Funciones anonimas
//si ocupo 1 funcion que solo ocuparé una vez, pueden estar solo en una sola linea


//FUNCION DECLARATIVA
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(numeroAleatorio(1,11));
//Función expresada
//Anonima(Expresada en una variable)
const miNumero = function(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(11,32));

const miNumeroFlecha = (max)=>{
    return Math.floor(Math.random()*(max-1)+1);
}
console.log(miNumeroFlecha(89));



//Función tradicional
function datos (a){
    return a+100;
}
function (a){
    return a+100;
}

(a)=>{
    return a+100;
}

var numero = (a)=> a+100;
var numero = a => a+100;


//FUNCION DECLARATIVA
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
//la paso a funcion flecha
const numeroFlecha = (min,max) => Math.floor(Math.random()*(max-min)+min);

