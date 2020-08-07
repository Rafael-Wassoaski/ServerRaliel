const sqlite3 = require('sqlite3').verbose();



const openConnection = function(){

  const db = new sqlite3.Database('Raliel.db', sqlite3.OPEN_READWRITE);

  return db;

}


module.exports = openConnection