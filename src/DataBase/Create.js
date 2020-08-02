const connection = require('./Connection');


const create = function(){
    connection().query('CREATE TABLE IF NOT EXISTS barbeiros(id INT PRIMARY KEY AUTO_INCREMENT, '+
    'nome VARCHAR(255), telefone VARCHAR(255))', function(err, result){
        if(err){
            throw err;
        }else{
            console.log('CREATED TABLE Barbeiros');
        }
    });

    connection().query('CREATE TABLE IF NOT EXISTS horas('+
    'hora DATETIME, idBarbeiro INT, status BOOLEAN,FOREIGN KEY(idBarbeiro) REFERENCES barbeiros(id), CONSTRAINT PK_id_Hora PRIMARY KEY(idBarbeiro, hora))', function(err, result){
        if(err){
            throw err;
        }else{
            console.log('CREATED TABLE Horas');
        }
    });

    connection().query('CREATE TABLE IF NOT EXISTS horasReservadas(id INT PRIMARY KEY AUTO_INCREMENT, '+
    'hora DATETIME, nomeCliente VARCHAR(255),'+ 
    'telefone VARCHAR(255), obs VARCHAR(255),'+ 
    'tokenCliente VARCHAR(255),'+ 
    'idBarbeiro INT, FOREIGN KEY(idBarbeiro) REFERENCES barbeiros(id),'+ 
    'FOREIGN KEY(tokenCliente) REFERENCES clientesToken(token))', function(err, result){
        if(err){
            throw err;
        }
        else{
         console.log('CREATED TABLE Horas Reservadas');
        }
    });

    connection().query('CREATE TABLE IF NOT EXISTS clientesToken(token VARCHAR(255) PRIMARY KEY UNIQUE)', function(err, result){
        if(err){
            throw err;
        }
        else{
         console.log('CREATED TABLE Clientes Token');
        }
    });

}

module.exports = create;