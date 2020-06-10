const express=require('express');
const bodyParse=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();

// Start Server
app.listen(3001,function(req,res){
    console.log('Servidor está rodando!');
})