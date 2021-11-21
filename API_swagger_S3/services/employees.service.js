const db = require("../config/db.config");


exports.getAllEmployees = (callback) => {
    db.query("SELECT * FROM  `employees`",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            console.log("test");
            return callback(null, results);
        }
    });
};

exports.getTwoBestEmployees = (callback) => {
    db.query("SELECT * FROM `employees` WHERE `employeeNumber` IN (SELECT * FROM(SELECT `salesRepEmployeeNumber` FROM `customers` GROUP BY `salesRepEmployeeNumber` ORDER BY COUNT(`salesRepEmployeeNumber`) DESC LIMIT 2) as t)",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getTwoBestEmployeesByCredit = (callback) => {
    db.query("SELECT * FROM `employees` WHERE `employeeNumber` IN (SELECT * FROM(SELECT `salesRepEmployeeNumber` FROM `customers` GROUP BY `salesRepEmployeeNumber`ORDER BY SUM(`creditLimit`) DESC LIMIT 2) as t)",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getCustomerByEmployeeId = (id,callback) => {
    db.query("SELECT * FROM customers WHERE salesRepEmployeeNumber = ?",
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

exports.getEmployeesById = (id,callback) => {
    db.query("SELECT * FROM employees WHERE employeeNumber = ?",
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

exports.getEmployeeByOfficeCode = (id,callback) => {
    db.query("SELECT * FROM employees WHERE officeCode = ?",
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

exports.getEmployeeByReportCode = (id,callback) => {
    db.query("SELECT * FROM employees WHERE reportsTo = ?",
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