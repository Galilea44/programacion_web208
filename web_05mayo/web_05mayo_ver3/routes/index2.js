const express = require('express');
const router = express.Router();
const path = require('path'); 

//Defincion de las rutas y manejadores
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../index2.html"));
});

module.exports=router;