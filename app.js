const express=require('express');
const bodyParse=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();


//conexao com o banco 
const urlencodeParser=bodyParse.urlencoded({extended:false});
const sql=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   port:3306
});
sql.query("use webstatus");






//template engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set ('view engine','handlebars');
app.use('/public',express.static('public'));
app.use('/css',express.static('css'));
app.use('/adm/css',express.static('css'));
app.use('/adm/images',express.static('images'));






//Renderizando os arquivos handlebars
app.get("/",function(req,res,results){
res.render('index',{imagens:results});
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

                            app.get("/portal-aluno",function(req,res){
                                res.render('portal-aluno');
                                });
                            
    


// Renderizando os arquivos handlebars da pasta adm
app.get("/adm/adm",function(req,res){res.render('adm/adm'); });
app.post("/adm/adm",urlencodeParser,function(req,res){
    sql.query("insert into adm (nome,cpf,nascimento,sexo,endereco,cep,telefone,celular,email,senha,comentarios) values (?,?,?,?,?,?,?,?,?,?,?)",[req.body.nome,req.body.cpf,req.body.nascimento,req.body.sexo,req.body.endereco,req.body.cep,req.body.telefone,req.body.celular,req.body.email,req.body.senha,req.body.comentarios]);
    res.render('adm/adm');
}); 



                                    app.get("/adm/buscar",function(req,res){
                                        res.render('adm/buscar');
                                        });

                                        app.get("/adm/deletar",function(req,res){
                                            res.render('adm/deletar');
                                            });

                                            app.get("/adm/encerrar",function(req,res){
                                                res.render('adm/encerrar');
                                                });

                                                app.get("/adm/historicoaluno",function(req,res){
                                                    res.render('adm/historicoaluno');
                                                    });

                                                    app.get("/adm/inseriraulas",function(req,res){
                                                        res.render('adm/inseriraulas');
                                                        });

                                                        app.get("/adm/solicitacoes",function(req,res){
                                                            res.render('adm/solicitacoes');
                                                            });
                            

                                



 //Disponibilizando imagens para serem renderizadas no handlebars

    app.get("/1",function(req,res){
        res.sendFile(__dirname+'/views/assets/images/1.jpg');
        });
       
        app.get("/2",function(req,res){
            res.sendFile(__dirname+'/views/assets/images/2.jpg');
            });
            app.get("/logo",function(req,res){
                res.render(__dirname+'/src/views/assets/images/logo.png');
                });
                app.get("/moto",function(req,res){
                    res.sendFile(__dirname+'/views/assets/images/moto.jpg');
                    });
                    app.get("/bg_header",function(req,res){
                        res.sendFile(__dirname+'/views/assets/images/bg_header.jpg');
                        });
                        app.get("/bomfim",function(req,res){
                            res.sendFile(__dirname+'/views/assets/images/bomfim.jpg');
                            });
                            app.get("/gt_favicon",function(req,res){
                                res.sendFile(__dirname+'/views/assets/images/gt_favicon.png');
                                });
                                app.get("/mac",function(req,res){
                                    res.sendFile(__dirname+'/views/assets/images/mac.jpg');
                                    });
                                    app.get("/pista-moto",function(req,res){
                                        res.sendFile(__dirname+'/views/assets/images/pista-moto.jpg');
                                        });
                                        app.get("sinalito",function(req,res){
                                            res.sendFile(__dirname+'/views/assets/images/sinalito.jpg');
                                            });
                                            app.get("/sinalito-m",function(req,res){
                                                res.sendFile(__dirname+'/views/assets/images/sinalito-m.png');
                                                });
                                                app.get("/teste",function(req,res){
                                                    res.sendFile(__dirname+'/views/assets/images/teste.jpg');
                                                    });

// Disponibilizando os arquivos de estilo css para serem utilizados nos handlebars


app.get("/bootstrap-theme",function(req,res){
    res.sendFile(__dirname+'/views/assets/css/bootstrap-theme.css');
    });

    app.get("/bootstrap.min",function(req,res){
        res.sendFile(__dirname+'/views/assets/css/bootstrap.min.css');
        });
    
        app.get("/main",function(req,res){
            res.sendFile(__dirname+'/views/assets/css/main.css');
            });
        
            app.get("/font-awesome.min",function(req,res){
                res.sendFile(__dirname+'/views/assets/css/font-awesome.min.css');
                });
            

 //Disponibilizando os arquivos de js para serem utilizados nos handlebars
        
 
 
 app.get("/google-maps",function(req,res){
            res.sendFile(__dirname+'/views/assets/css/google-maps.js');
            });
            app.get("/headroom.min",function(req,res){
                res.sendFile(__dirname+'/views/assets/css/headroom.min.js');
                });
                app.get("/html5shiv",function(req,res){
                    res.sendFile(__dirname+'/views/assets/css/html5shiv.js');
                    });
                    app.get("/jQuery.headroom.min",function(req,res){
                        res.sendFile(__dirname+'/views/assets/css/jQuery.headroom.min.js');
                        });
                        app.get("/respond.min",function(req,res){
                            res.sendFile(__dirname+'/views/assets/css/respond.min.js');
                            });
                            app.get("/template",function(req,res){
                                res.sendFile(__dirname+'/views/assets/css/template.js');
                                });
        


                // Start Server
app.listen(3001,function(req,res){
    console.log('Servidor está rodando!');
  
});