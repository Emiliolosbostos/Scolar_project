const db = require("../config/db.config");

exports.getProductsByOrderNumber = (id,callback) => {
    db.query("SELECT * FROM `products` WHERE `productCode` IN (SELECT `productCode` FROM `orderdetails` WHERE `orderNumber`= ?)",
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

exports.getThreeBestProductByQuantity = (callback) => {
    db.query("SELECT * FROM `products` WHERE `productCode` IN (SELECT * FROM(SELECT `productCode` FROM `orderdetails` GROUP BY `productCode` ORDER BY SUM(`priceEach`) DESC LIMIT 3) AS t); ",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getThreeBestProductByPrice = (callback) => {
    db.query("SELECT * FROM `products` WHERE `productCode` IN (SELECT * FROM(SELECT `productCode` FROM `orderdetails` GROUP BY `productCode` ORDER BY COUNT(`productCode`) DESC LIMIT 3) AS t)",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.createProducts = (data, callback) => {
    db.query(
        "INSERT INTO `products`(`productCode`, `productName`, `productLine`, `productScale`, `productVendor`, `productDescription`, `quantityInStock`, `buyPrice`, `MSRP`) VALUES (?,?,?,?,?,?,?,?,?)",
        [data.productCode, data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Produit ajouté`);
        }
    );
};

exports.deleteProducts = (code,callback) => {
    db.query(
        "DELETE FROM products WHERE productCode = ?",
        [code],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                console.log(results);
                return callback(null, "Delete succeeded!");
            }
        });
};

exports.updateProducts = (productCode,data,callback) => {
    db.query(`UPDATE customers set productName=?,productLine=?,productScale=?,productVendor=?,productDescription=?,quantityInStock=?,buyPrice=?,MSRP=? WHERE productCode = ?`,
        [data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP,productCode],
        function(error, results){
            if(error){
                return callback(error);
            } else {
                return callback(null, "Update succeeded!");
            }
        });
};