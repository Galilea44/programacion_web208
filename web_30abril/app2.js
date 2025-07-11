//importar express
const express =require('express'); 

//Generar una instancia 
const app=express();

//definicion depuerto
const port=3009;

app.get('/', (req,res)=>{
    res.send('Hola mundo desde 3009--- Alexandra Gonzalez');
});  

app.listen(port)