const productLinesService = require("../services/productLines.services");

exports.getAllProductLines = (req,res,next) => {
    console.log("test");
    productLinesService.getAllProductLines((error,results)=>{
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
