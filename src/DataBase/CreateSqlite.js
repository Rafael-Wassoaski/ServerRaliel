const connection = require('./ConnectionSqlite');


const create = function(){
    connection().run('CREATE TABLE IF NOT EXISTS barbeiros(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(255), telefone VARCHAR(255))', function(err, result){
        if(err){
            throw err;
        }else{
            console.log('CREATED TABLE Barbeiros');
        }
    });

    connection().run('CREATE TABLE IF NOT EXISTS horas(hora DATETIME, idBarbeiro INTEGER, status BOOLEAN,FOREIGN KEY(idBarbeiro) REFERENCES barbeiros(id), CONSTRAINT PK_id_Hora PRIMARY KEY(idBarbeiro, hora))', function(err, result){
        if(err){
            throw err;
        }else{
            console.log('CREATED TABLE Horas');
        }
    });

    connection().run('CREATE TABLE IF NOT EXISTS horasReservadas(id INTEGER PRIMARY KEY AUTOINCREMENT, hora DATETIME, nomeCliente VARCHAR(255),telefone VARCHAR(255), obs VARCHAR(255),tokenCliente VARCHAR(255),idBarbeiro INTEGER, FOREIGN KEY(idBarbeiro) REFERENCES barbeiros(id),FOREIGN KEY(tokenCliente) REFERENCES clientesToken(token))', function(err, result){
        if(err){
            throw err;
        }
        else{
         console.log('CREATED TABLE Horas Reservadas');
        }
    });

    connection().run('CREATE TABLE IF NOT EXISTS clientesToken(token VARCHAR(255) PRIMARY KEY UNIQUE)', function(err, result){
        if(err){
            throw err;
        }
        else{
         console.log('CREATED TABLE Clientes Token');
        }
    });

// connection().close();
}

module.exports = create;