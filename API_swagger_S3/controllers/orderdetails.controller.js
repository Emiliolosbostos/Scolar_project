const orderDetailsServices = require("../services/orderdetails.services");

exports.insertProductInOrder = (req,res,next)=>{
    const data = {
        orderNumber:req.body.orderNumber,
        productCode:req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        priceEach: req.body.priceEach,
        orderLineNumber: req.body.orderLineNumber,
    };
    console.log(data);
    orderDetailsServices.insertProductInOrder(data,(error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({
                success:0,
                data:"Bad request"
            });;
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};