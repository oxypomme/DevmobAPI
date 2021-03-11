const util = require('util');
const mysql = require('mysql');
const credits = require("./mysql.secret.json");

const con = mysql.createConnection(credits);

con.connect((err) => {
    if (err) {
        console.log("MySQL: ", err);
    }
    else {
        console.log("Connecté à la base de données MySQL!");
    }
});
con.asyncQuery = (sql, args) => {
    return util.promisify(con.query).call(con, sql, args);
}

exports.db = con;