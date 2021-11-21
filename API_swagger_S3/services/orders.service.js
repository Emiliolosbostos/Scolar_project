const db = require("../config/db.config");

exports.getOrdersByCustomerNumber = (id,callback) => {
    db.query("SELECT * FROM customers WHERE customerNumber = ?",
        [id]
        ,function(error, results, fields){
            if(error) {
                return callback(error);
            } else {
                console.log(results);
                return callback(null, results);
            }
        });
};

exports.getPriceWithDate = (date,callback) => {
    db.query("SELECT SUM(`priceEach`) FROM `orderdetails` WHERE `orderNumber` IN (SELECT * FROM(SELECT `orderNumber` FROM `orders` WHERE `orderDate` = ?) as t)",
        [date],
        function(error, results, fields){
            if(error) {
                return callback(error);
            } else {
                console.log(results);
                return callback(null, results);
            }
        });
};