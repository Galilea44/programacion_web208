//Importanción de express
const express = require('express');

//Instanciar express
const app =express();

//Puerto
const port =3059;
app.get("/", (req,res)=>{
    // res.send("Hola mundo");
    // res.sendFile("C:/Users/ale22/Desktop/web_05mayo/index.html"); 
    res.sendFile(path.join(__dirname+"/index.html"))
});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})
