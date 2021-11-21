const db = require("../config/db.config");
exports.getAllCustomers = (callback) => {
    db.query("SELECT * FROM  `customers`",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getNumberCustomers = (callback) => {
    db.query("SELECT COUNT (*) FROM customers",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getCustomerById = (id,callback) => {
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

exports.createCustomers = (data, callback) => {
    db.query(
        "INSERT INTO `customers`(`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `addressLine1`, `addressLine2`, `city`, `state`, `postalCode`, `country`, `salesRepEmployeeNumber`, `creditLimit`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [data.customerNumber, data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesResEmployeeNumber, data.creditLimit],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Inscription réussi`);
        }
    );
};

exports.updateCustomers = (customerNumber,data,callback) => {
    db.query(`UPDATE customers set customerName=?,contactLastName=?,contactFirstName=?,phone=?,addressLine1=?,addressLine2=?,city=?,state=?,postalCode=?,country=?,salesRepEmployeeNumber=?,creditLimit=? WHERE customerNumber = ?`,
    [data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesResEmployeeNumber, data.creditLimit,customerNumber],
    function(error, results){
        if(error){
            return callback(error);
        } else {
            return callback(null, "Update succeeded!");
        }
        });
};

exports.deleteCustomers = (id,callback) => {
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
