const productsService = require("../services/products.service");
const customersService = require("../services/customers.service");
const employeesService = require("../services/employees.service");

exports.getProductsByOrderNumber = (req,res,next) => {
    productsService.getProductsByOrderNumber(req.params.id,(error,results)=>{
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

exports.getThreeBestProductByQuantity = (req,res,next) => {
    productsService.getThreeBestProductByQuantity((error,results)=>{
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

exports.getThreeBestProductByPrice = (req,res,next) => {
    productsService.getThreeBestProductByPrice((error,results)=>{
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

exports.createProducts = (req,res,next)=>{
    const data = {
        productCode:req.body.productCode,
        productName:req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productVendor,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP,
    };
    console.log(data);
    productsService.createProducts(data,(error,results)=>{
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
    productsService.deleteProducts(req.params.code,(error,results)=>{
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
        productCode:req.body.productCode,
        productName:req.body.productName,
        productLine: req.body.productLine,
        productScale: req.body.productScale,
        productVendor: req.body.productVendor,
        productDescription: req.body.productDescription,
        quantityInStock: req.body.quantityInStock,
        buyPrice: req.body.buyPrice,
        MSRP: req.body.MSRP,
    };
    console.log(data);
    console.log(req.params.productCode);
    productsService.updateProducts(req.params.productCode,data,(error,results)=>{
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