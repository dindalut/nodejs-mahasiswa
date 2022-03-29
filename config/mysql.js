var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "kuliah"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Koneksi Berhasil !");
});

module.exports = con;