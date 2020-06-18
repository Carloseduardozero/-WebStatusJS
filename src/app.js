const express=require('express');
const bodyParse=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();

//template engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set ('view engine','handlebars');



app.get("/",function(req,res){
res.render('index');
});



app.get("/adicao",function(req,res){
    res.render('adicao');
    });

    app.get("/admin",function(req,res){
        res.render('admin');
        });

        app.get("/cat-a",function(req,res){
            res.render('cat-a');
            });

            app.get("/cat-ab",function(req,res){
                res.render('cat-ab');
                });

                app.get("/cat-b",function(req,res){
                    res.render('cat-b');
                    });

                    app.get("/contato",function(req,res){
                        res.render('contato');
                        });

                        app.get("/empresa",function(req,res){
                            res.render('empresa');
                            });

                            app.get("/portal-aluno.",function(req,res){
                                res.render('portal-aluno');
                                });

                             
// Start Server
app.listen(3001,function(req,res){
    console.log('Servidor está rodando!');
  
});