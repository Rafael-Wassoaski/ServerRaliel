const mysql = require('mysql');

const connect = function(){

    let connection = mysql.createConnection({
        host : "",
        user : "",
        password : "",
        database: ""
    });
    
    
    connection.connect(function(err){
        if (err){
            throw err;
        }
        console.log(connect);
    });

    return connection;

};



module.exports = connect;