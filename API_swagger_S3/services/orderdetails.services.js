const db = require("../config/db.config");

exports.insertProductInOrder = (data, callback) => {
    db.query(
        "INSERT INTO `orderdetails`(`orderNumber`, `productCode`, `quantityOrdered`, `priceEach`, `orderLineNumber`) VALUES (?,?,?,?,?)",
        [data.orderNumber, data.productCode, data.quantityOrdered, data.priceEach, data.orderLineNumber],
        (error, results, fields) => {
            if (error) {
                return callback(error)
            }
            return callback(null, `Produit ajouté`);
        }
    );
};

exports.deleteProductInOrder = (id,callback) => {
    db.query(
        "DELETE FROM customers WHERE customerNumber = ?",
        [id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                console.log(results);
                return callback(null, "Delete succeeded!");
            }
        });
};
