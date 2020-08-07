const connection = require('./ConnectionSqlite');

const selectAll = function(callback){
    connection().all('SELECT * FROM horas WHERE status LIKE false', function(err, result, fields){
            if(err){
                status = 400
                console.error(err.sqlMessage);
            }else{
                status = 200;
                callback(result);
            }  
            
            
    });
}

const selectMyHorarios = function(token, callback){
    connection().query(`SELECT * FROM horasReservadas WHERE tokenCliente LIKE '${token}'`, function(err, result, fields){
        if(err){
            status = 400
            console.error(err.sqlMessage);
        }else{
            status = 200;
            callback(result);
        }  
        
        
});

}

module.exports = {selectAll};