const db = require("../config/db.config");
exports.getAllOffices = (callback) => {
    db.query("SELECT * FROM  `offices`",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};

exports.getNumberOfOffices = (callback) => {
    db.query("SELECT COUNT (*) FROM offices",function(error, results, fields){
        if(error) {
            return callback(error);
        } else {
            return callback(null, results);
        }
    });
};
exports.creatOffice = (data, callback) => {
    db.query(
        "INSERT INTO `offices`(`officeCode`, `city`, `phone`, `addressLine1`, `addressLine2`, `state`, `country`, `postalCode`, `territory`) VALUES (?,?,?,?,?,?,?,?,?)\n",
        [data.officeCode, data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Bureau ajouté`);
        }
    );
};

exports.deleteOffices = (id,callback) => {
    db.query(
        "DELETE FROM offices WHERE officeCode = ?",
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

exports.updateOffices = (officeCode,data,callback) => {
    db.query(`UPDATE customers set city=?,phone=?,addressLine1=?,addressLine2=?,state=?,country=?,postalCode=?,territory=? WHERE officeCode = ?`,
        [data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory, officeCode],
        function(error, results){
            if(error){
                return callback(error);
            } else {
                return callback(null, "Update succeeded!");
            }
        });
};