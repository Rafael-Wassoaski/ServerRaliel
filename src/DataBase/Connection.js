const mysql = require('mysql');

const connect = function(){

    let connection = mysql.createConnection({
        host : "localhost",
        user : "Rafael",
        password : "4815162342",
        database: "serverRaliel"
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