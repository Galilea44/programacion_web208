//arreglos--> longitud de 4, pero iniciamos a contar sus elementos desde 0
let frutas = ["manzana","pera", "palta", "mango"];
/* console.log(frutas);
//ver sus propiedades
console.log(frutas.length);
console.log(frutas[2]);
console.log(frutas [15]);  //-->indefinido(tengo el espacio pero esta vacio) */

//estructura for 
for( let i=0; i<frutas.lenght;i++){
    console.log("Fruta"+(i+1)+":"+frutas[i]);

}
//for of, for in
//const esta dentro de la estructura for por eso puedo ocuparla 2 veces
for(const fruta of frutas) {
    console.log(fruta)
}
for(const fruta in frutas){
    console.log(fruta)
}

//Hacer la tabla del 3 con un for
console.log("-----------------Tabla del 3------------------")
for(let j=1; j<=10; j++){
    console.log("3X" + j+ " = "+ (3*j));

}
//Hacer la tabla del 10 con un for anidado
console.log("-----------------Tabla del 10------------------")
    for (let i = 10; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
                console.log("10X" + j + " = " + (i * j));
         }
    }