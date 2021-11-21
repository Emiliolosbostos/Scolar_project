const orderDetailsController = require("../controllers/orderdetails.controller");
const express = require("express");
let router = express.Router();

router.post("/create",orderDetailsController.insertProductInOrder);
/**
 * @swaggers
 * /orderDetails/create:
 *   post:
 *      description: Used to insert product in order
 *      tags:
 *          - orderDetails
 *      parameters:
 *          - in: body
 *            name: orderDetails
 *            description: product data
 *            schema:
 *              type: object
 *              required:
 *                 - orderNumber
 *                 - productCode
 *                 - quantityOrdered
 *                 - priceEach
 *                 - orderLineNumber
 *              properties:
 *                  orderNumber:
 *                      type: integer
 *                      example: 10102
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 9
 *                      example: S18_1749
 *                  quantityOrdered:
 *                      type: integer
 *                      example: 30
 *                  priceEach:
 *                      type: integer
 *                      example: 136
 *                  orderLineNumber:
 *                      type: integer
 *                      example: 3
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;