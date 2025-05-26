const express = require('express');
const router = express.Router();

module.exports = function(db) {
    //Mostrar en lista
    router.get('/',(req,res)=>{
        //Consulta a la DB
        const consulta='SELECT * FROM users';

        //usamos la DB para conectarnos a la base de datos
        db.query(consulta,(err,results)=>{
            if(err){
                console.error('No se encontro el usuario', err);
                res.send("error Comunicate con Soporte")
            }else{
                res.render('index',{user:results});
            }
        });
    });

    //Agregar usuario
    router.post('/add',(req,res)=>{
        const{name,email}= req.body;
        const insertarRegistroUsuario='INSERT INTO users(name,email) VALUES (?,?)';
        db.query(insertarRegistroUsuario,[name,email],(err)=>{
            if(err){
                console.error('No se inserto el registro', err);
            }else{
                res.redirect('/');
            }
        });
    });

    //Editar usuario
    router.get('/edit/:id',(req,res)=>{
        const {id} =req.params;
        const editar = 'SELECT * FROM users WHERE id = ?';
        db.query(editar, [id], (err,results)=>{
            if(err){
                console.error("Error", err);
            }else{
                res.render('edit',{user:results[0]});
            }
        });
    });

    //update
    router.post('/update/:id', (req,res)=>{
        const {id} = req.params;
        const {name, email} = req.body;
        const actualizarUser = 'UPDATE users SET name = ?, email= ? WHERE id = ?';
        db.query(actualizarUser, [name,email,id], (err)=>{
            if(err){
                console.error("sin actualizar usuario", err);
                res.send("Error de update")
            }else{
                res.redirect('/');
            }
        });
    });

    //eliminar usuario
    router.get('/delete/:id',(req,res)=>{
        const {id} = req.params;
        const eliminar = 'DELETE FROM users WHERE id = ?';
        db.query(eliminar, [id], (err)=>{
            if(err){
                console.error('Error en delete', err);
                res.send("Error en eliminar usuaario");
            }else{
                res.redirect('/');
            }
        });
    });
    return router;
};    
