const productsController = require("../controllers/products.controller");
const express = require("express");
const customersController = require("../controllers/customers.controller");
const employeesController = require("../controllers/employees.controller");
let router = express.Router();

router.get("/:id/getProductsByOrderNumber",productsController.getProductsByOrderNumber);
/**
 * @swagger
 * /products/{id}/getProductsByOrderNumber :
 *   get:
 *      description: Used to get products with the order number
 *      tags:
 *          - products
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: orderNumber
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/list3BestProductByQuantity",productsController.getThreeBestProductByQuantity);
/**
 * @swagger
 * /products/list3BestProductByQuantity:
 *   get:
 *      description: Used to get 3 most valuable products by quantity
 *      tags:
 *          - products
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/list3BestProductByPrice",productsController.getThreeBestProductByPrice);
/**
 * @swagger
 * /products/list3BestProductByPrice:
 *   get:
 *      description: Used to get 3 most valuable products by price
 *      tags:
 *          - products
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post("/create",productsController.createProducts);
/**
 * @swagger
 * /products/create:
 *   post:
 *      description: Used to create products
 *      tags:
 *          - products
 *      parameters:
 *          - in: body
 *            name: Products
 *            description: products data
 *            schema:
 *              type: object
 *              required:
 *                 - productCode
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: S10_1478
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: 2008 Renault Clio 2
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Classic Cars
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 1:10
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Red Start Deicast
 *                  productDescription:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: 1:10 scale replica of actual Renault cars
 *                  quantityInStock:
 *                      type: integer
 *                      example: 7465
 *                  buyPrice:
 *                      type: double
 *                      example: 20.84
 *                  MSRP:
 *                      type: double
 *                      example: 84.421
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:code/delete",productsController.delete);
/**
 * @swagger
 * /products/{code}/delete:
 *   delete:
 *      description: Used to delete product
 *      tags:
 *          - products
 *      parameters:
 *          - in: path
 *            name: code
 *            type: string
 *            description: productCode
 *            example: S10_1478
 *            required : true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/:productCode/update",productsController.updateCustomers);
/**
 * @swagger
 * /products/{productCode}/update:
 *  put:
 *      description: Used to update product
 *      tags:
 *          - products
 *      parameters:
 *          - in: path
 *            name: productCode
 *            type: String
 *            description: product code
 *            required: true
 *            example: S10_1478
 *          - in: body
 *            name: product
 *            description: product data with new values of properties
 *            schema:
 *              type: object
 *              required:
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: 2008 Renault Clio 3
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Classic Cars
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 1:10
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Red Start Deicast
 *                  productDescription:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: 1:10 scale replica of actual Renault cars
 *                  quantityInStock:
 *                      type: integer
 *                      example: 7465
 *                  buyPrice:
 *                      type: double
 *                      example: 20.84
 *                  MSRP:
 *                      type: double
 *                      example: 84.421
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;