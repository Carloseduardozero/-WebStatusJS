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
app.use('/adm/css',express.static('views/adm/css'));
app.use('/css',express.static('views/assets/css'));
app.use('/images',express.static('views/assets/images'));


app.use('/views/aluno/css',express.static('css'));
app.use('/aluno/css',express.static('views/aluno/css'));
app.use('/adm/images',express.static('views/adm/images'));
app.use('/aluno/images',express.static('views/aluno/images'));




//Renderizando os arquivos handlebars
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
    
                                app.get("/portal-aluno/:id?",function(req,res){
                                    if(!req.params.id){
                                        sql.query("select * from webstatus", function(err,results,fields){
                                    res.render('portal-aluno',{data:results});
                                        });
                                    }
                                      
                                });

// Renderizando os arquivos handlebars da pasta admin
app.get("/adm/adm",function(req,res){res.render('adm/adm'); });
app.post("/adm/adm",urlencodeParser,function(req,res){
    sql.query("insert into adm (nome,cpf,nascimento,sexo,endereco,cep,telefone,celular,email,senha,comentarios) values (?,?,?,?,?,?,?,?,?,?,?)",[req.body.nome,req.body.cpf,req.body.nascimento,req.body.sexo,req.body.endereco,req.body.cep,req.body.telefone,req.body.celular,req.body.email,req.body.senha,req.body.comentarios]);
    res.render('adm/adm');
}); 

     app.get("/adm/buscar:id?",function(req,res){
            if(!req.params.id){
                sql.query("select * from adm order by id asc", function(err,results,fields){
            res.render('adm/buscar',{data:results});
                });
            }else{
                sql.query("select * from adm where id=? order by id asc",[req.params.id], function(err,results,fields){
                    res.render('adm/buscar',{data:results});
            });
        } 
        });

        app.get("/adm/deletar",function(req,res){
            res.render('adm/deletar');
            });
            app.get("/adm/buscado/:id?",function(req,res){
                if(!req.params.id){
                    sql.query("select * from adm order by id asc", function(err,results,fields){
                res.render('adm/buscado',{data:results});
                    });
                }else{
                    sql.query("select * from adm where id=? order by id asc",[req.params.id], function(err,results,fields){
                        res.render('adm/buscado',{data:results});
                        console.log(req.params.id)
                });
            } 
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
                            
// Renderizando os arquivos handlebars da pasta aluno
app.get("/aluno/aulas",function(req,res){
    res.render('aluno/aulas');
    });

    app.get("/aluno/avisos",function(req,res){
        res.render('aluno/avisos');
        });

        app.get("/aluno/solicitacao",function(req,res){
            res.render('aluno/solicitacao');
            });
// Disponibilizando os arquivos de estilo css para serem utilizados nos handlebars
 

app.get("/views/assets/css/bootstrap-theme",function(req,res){
    res.sendFile('views/assets/css/bootstrap-theme.css');
    });

    app.get("/views/assets/css/bootstrap.min",function(req,res){
        res.sendFile('views/assets/css/bootstrap.min.css');
        });
    
        app.get("/views/assets/css/main",function(req,res){
            res.sendFile('views/assets/css/main.css');
            });
        
            app.get("/views/assets/css/font-awesome.min",function(req,res){
                res.sendFile('views/assets/css/font-awesome.min.css');
                });
            
            

app.listen(3002,function(req,res){
    console.log('Servidor está rodando!');
  
});