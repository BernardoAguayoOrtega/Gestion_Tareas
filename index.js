const Joi = require('joi')
const express = require('express');
const app = express();
var con = require('./db');
app.use(express.json());
 
//settings
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

//Connect database
con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

//CRUD

//GET
app.get('/tareas/:Responsable', (req, res) => {

    let sql = `select * from gestiontareas.tareas where Responsable = '${req.params.Responsable}';`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
}); //good

app.get('/tareas/usuarios/:id', (req, res) => {
    const Responsable = req.body.Responsable

    con.query(`select * from gestiontareas.tareas where Responsable = '${Responsable}' and id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

app.get('/tareas', (req, res) => {

    let sql = "select * from gestiontareas.tareas;";
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
});//good

app.get('/tareas/id/:id', (req, res) => {

    let sql = `select * from gestiontareas.tareas where id = ${req.params.id};`;
    con.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
    });
});


//POST
app.post("/tareas/crear", (req, res) =>{
    const Titulo = req.body.Titulo
    const Descripcion = req.body.Descripcion
    const Estatus_Completado = req.body.Estatus_Completado
    const Fecha_entrega = req.body.Fecha_entrega
    const Comentarios = req.body.Comentarios
    const Responsable = req.body.Responsable
    const Tags = req.body.Tags

    con.query(`INSERT INTO gestiontareas.tareas (Titulo,Descripcion,Estatus_Completado,Fecha_entrega,Comentarios, Responsable, Tags) VALUES ('${Titulo}', '${Descripcion}', '${Estatus_Completado}', '${Fecha_entrega}', '${Comentarios}', '${Responsable}', '${Tags}')`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//PUT
app.put('/tareas/Titulo/:id', (req, res) => {
    const Titulo = req.body.Titulo
    con.query(`UPDATE gestiontareas.tareas SET Titulo = '${Titulo}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

app.put('/tareas/Descripcion/:id', (req, res) => {
    const Descripcion = req.body.Descripcion
    con.query(`UPDATE gestiontareas.tareas SET Descripcion = '${Descripcion}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

app.put('/tareas/Estatus/:id', (req, res) => {
    const Estatus_Completado = req.body.Estatus_Completado
    con.query(`UPDATE gestiontareas.tareas SET Estatus_Completado = '${Estatus_Completado}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });

});

app.put('/tareas/Fecha/:id', (req, res) => {
    const Fecha_entrega = req.body.Fecha_entrega
    con.query(`UPDATE gestiontareas.tareas SET Fecha_entrega = '${Fecha_entrega}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });

});

app.put('/tareas/Comentarios/:id', (req, res) => {
    const Comentarios = req.body.Comentarios
    con.query(`UPDATE gestiontareas.tareas SET Comentarios = '${Comentarios}' WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
});

//DELETE
app.delete('/tareas/:id', (req, res) => {
    //Delete
    con.query(`DELETE FROM gestiontareas.tareas WHERE id = ${req.params.id}`, function(err,results){
        if(err) throw err;
        res.send(results);
    });
    //return response
});