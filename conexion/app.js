/*Haremos una conexion a una base dedatos*/

//framework de express
const express = require('express');
//usar mysql
const mysql = require('mysql');
//body parse, variable para
var bodyParser=require('body-parser')
//crear una variable para la conexxionn
var con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'Flajos710822',
    database:'mibase'


})

con.connect();

app.use(express.json);

app.use(express.urlencoded({
    extend:true
}));

app.use(express.static('public'));

//metodos para agregar usuario y para consultar

app.post('/agregarUsuario', (req, res)=>{

    let nombre = req.body.nombre

    con.query('INSERT INTO usuario value("'+nombre+'")',(err, rspuesta, fields)=>{

        if(err)return console.log('ERROR', err)


        return res.send('<h1>Nombre: </h1>'+nombre)
    })

});

app.get('/consultaUsuario', (req,res)=>{

    con.query('SELECT * FROM usuario', (err, respuesta, fields)=>{

        if(err)return console.log('ERROR', err)

        var userHTML=``

        var i = 0

        console.log(respuesta)

        respuesta.array.forEach(user => {
            i++;

            userHTML+=`<tr><td>${i}</td><td>${user.nombre}</td></tr>`


        });

        return res.send(`<table>
        
            <tr>
                <th>id: </th>
                <th>Nombre: </th>
            </tr>
            ${userHTML}

            </table>`)

    })

})

app.listen(3000, ()=>{
    console.log('servidor escuchando en el puerto 3000')
})