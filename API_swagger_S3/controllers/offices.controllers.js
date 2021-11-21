const officesService = require("../services/offices.service");
const customersService = require("../services/customers.service");
const productsService = require("../services/products.service");

exports.getAll = (req,res,next) => {
    officesService.getAllOffices((error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.getNumberOfOffices = (req,res,next) => {
    officesService.getNumberOfOffices((error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.creatOffice = (req,res,next)=>{
    const data = {
        officeCode:req.body.officeCode,
        city:req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory,
    };
    console.log(data);
    officesService.creatOffice(data,(error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.delete = (req,res)=>{
    officesService.deleteOffices(req.params.id,(error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.updateOffices = (req,res,)=>{
    const data = {
        city:req.body.city,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        territory: req.body.territory,
    };
    console.log(data);
    console.log(req.params.officeCode);
    officesService.updateOffices(req.params.officeCode,data,(error,results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};