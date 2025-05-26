const express = require('express');
const mysql =require('mysql2');
const path = require('path'); 
const bodyParser = require('body-parser');

const app = express();

//sirve para archivos estaticos en css, img etc
app.use(express.static(path.join(__dirname,"public")));

//majejar peticiones por medio de URL usando POST y por medio de REQ
app.use(bodyParser.urlencoded({extended:false}));


//configuracion de plantillas
app.set('view engine', 'ejs');

//conexion a la DB
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'burbuja22',
    database: 'node_crud',
    port:3306
}); 

//validacion de la conexion a la DB
db.connect(err=>{
    if(err){
        console.error('Sin conexion a la DB', err);
    }
    else{
        console.log('Base de datos conectada')
    }
});

// importar rutas después de definir d
const routes = require('./routes/routes')(db);

// Usar rutas
app.use('/', routes);

//Iniciar el servidor
const port=3005;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
