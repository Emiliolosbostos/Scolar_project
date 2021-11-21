const ordersService = require("../services/orders.service");

exports.getOrdersByCustomerNumber = (req,res,next) => {
    ordersService.getOrdersByCustomerNumber(req.params.id,(error,results)=>{
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

exports.getPriceWithDate = (req,res,next) => {
    ordersService.getPriceWithDate(req.params.date,(error,results)=>{
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