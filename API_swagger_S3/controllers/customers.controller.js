const customersService = require("../services/customers.service");

exports.index = (req,res)=> {
    customersService.getAllCustomers((error,results)=>{
        if (error){
            console.log(error);
            res.render('customers/index', {customers: null });
        }
        res.render('customers/index', {customers: results });
    });
};

exports.getAll = (req,res,next) => {
    customersService.getAllCustomers((error,results)=>{
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

exports.getNumberCustomers = (req,res,next) => {
    customersService.getNumberCustomers((error,results)=>{
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

exports.getCustomerById = (req,res,next) => {
    customersService.getCustomerById(req.params.id,(error,results)=>{
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

exports.createCustomers = (req,res,next)=>{
    const data = {
        customerNumber:req.body.customerNumber,
        customerName:req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesResEmployeeNumber: req.body.salesResEmployeeNumber,
        creditLimit: req.body.creditLimit
    };
    console.log(data);
    customersService.createCustomers(data,(error,results)=>{
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

exports.updateCustomers = (req,res)=>{
    const data = {
        customerName:req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesResEmployeeNumber: req.body.salesResEmployeeNumber,
        creditLimit: req.body.creditLimit
    };
    console.log(data);
    console.log(req.params.customerNumber);
    customersService.updateCustomers(req.params.customerNumber,data,(error,results)=>{
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

exports.delete = (req,res)=>{
    customersService.deleteCustomers(req.params.id,(error,results)=>{
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
