const express = require('express');
const rutas =require('./routes/index3.js');

//Instanciamos express
const app=express();

//Configuracion del server uso de rutas
app.use("/",rutas);

//Puerto
const port=6722;

//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});