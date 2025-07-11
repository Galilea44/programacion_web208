//importar express
const express =require('express'); 

//Generar una instancia 
const app=express();

//definicion depuerto
const port=2209;

app.get('/', (req,res)=>{
    res.send('Hola mundo desde 2209--- Alexandra Gonzalez');
});  

app.listen(port)