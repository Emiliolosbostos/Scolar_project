const db = require("../config/db.config");

exports.getAllProductLines = (callback) => {
    db.query("SELECT * FROM `productlines`",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            console.log("test");
            return callback(null, results);
        }
    });
};
