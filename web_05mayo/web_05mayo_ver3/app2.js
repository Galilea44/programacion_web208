const express = require('express');
const rutas =require('./routes/index2.js');

//Instanciamos express
const app=express();

//Configuracion del server uso de rutas
app.use("/",rutas);

//Puerto
const port=5405;

//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});
    