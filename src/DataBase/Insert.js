const connection = require('./Connection');

const insertBarbeiro = function(nome, telefone){
    let status;
    connection().query(`INSERT INTO barbeiro(nome, telefone) VALUES(${nome}, ${telefone})`,
    function(err){
        if(err){
            status = 400;
            console.error(err.sqlMessage);
        }else{
            status = 200;
            console.log('Inserted data Barbeiro');
        }
    });

    return status;
}

const insertHorario = function(hora, id){
    let status;
    connection().query(`INSERT INTO horas(hora, idBarbeiro, status) VALUES(${hora}, ${id}, false)`,
    function(err){
        if(err){
            status = 400;
            console.error(err.sqlMessage);
        }else{
            status = 200;
            console.log('Inserted data Horario');
        }
    });
    return status;
}

const insertReserva = function(id, data, nome, telefone, obs, token){
    let status;
    connection().query(`INSERT INTO horasReservadas (hora, nomeCliente, telefone, obs, idBarbeiro, tokenCliente) VALUES(${data}, `+
    `'${nome}', '${telefone}', '${obs}', ${id}, '${token}')`,
    function(err){
        if(err){
            status = 400
            console.error(err);
        }else{
            status = 200;
            console.log('Inserted data Horario');
        }
    });
    return status;
}

const insertToken = function(tokenGenerated){

    connection().query(`INSERT INTO clientesToken VALUES('${tokenGenerated}')`,
    function(err){
        if(err){
            status = 400
            console.error(err.sqlMessage);
        }else{
            status = 200;
            console.log('Inserted data Token');
        }
    });

}


module.exports = {insertBarbeiro, insertHorario, insertReserva, insertToken}