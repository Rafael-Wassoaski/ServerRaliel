const express = require ('express');
const app = express();
const create = require('./DataBase/Create');
const insert = require('./DataBase/Insert');
const select = require('./DataBase/Select');
const tokenGenerator = require('uuid-token-generator');
const createSqlite = require('./DataBase/CreateSqlite');

// create();
createSqlite();

app.use(express.json());


app.get("/", function(request, response){
    //request horarios e gera token se precisar
    let token;
    if(request.body.token == 0){
        let tokenGenerate = new tokenGenerator(128, tokenGenerator.BASE62);
        token = tokenGenerate.generate();
        insert.insertToken(token);
    }
    let horarios;
    select.selectAll(function(result){
        horarios = result;
        response.json({"token": token, "horarios": horarios});
        
    });

    

    
})

app.post("/inserirHorario", function(request, response){
    //insere um horario
    if(insert.insertHorario(request.body.horario, request.body.id) == 200){
        response.json({
            'status' : 200
        })
    }else{
        response.json({
            'status' : 400
        })
    }

});

app.post("/reservarHorario", function(request, response){
    //reserva uma hora
    if(insert.insertReserva(request.body.id,
        request.body.data,
        request.body.nome,
        request.body.telefone,
        request.body.obs,
        request.body.token,
        ) == 200){
        response.json({
            'status' : 200
        })
    }else{
        response.json({
            'status' : 400
        })
    }

});

app.listen(process.env.PORT || 3000);