/* Importar las dependencias, para cualquiero cosa que osuoemos*/
/* const=declarar una constante*/
//Framework express, para utilizar librerias y elementos
const express=require('express');

//Instanciar una variable de express
var app=express();

//Utilizaremos el directorio public, para alojar los archivos que puede acceder el cliente
app.use(express.static('public'));



//definimos una ruta post
//request es una peticion qe hace un cliente
//response es la respuesta a la peticion del cliente
app.post('/ruta-post',(req,res)=>{

    return res.send("Hola desde la ruta post");

});


//levantar el servidor
app.listen(8080,()=>{

    console.log("Servidor escuchando desde el puerto 8080")

});
