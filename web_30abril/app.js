//importar express
const express =require('express'); 

//Generar una instancia 
const app=express();

//definicion depuerto
const port=5023;

app.get('/', (req,res)=>{
    res.send('Hola mundo desde 5023--- Alexandra Gonzalez');
});  //get es la madre de todas las PETICIONES (de como se recibe y envia info) HTTP, Note: peticiones y metodo get es diferente

app.listen(port)

