const ordersController = require("../controllers/orders.controllers");
const express = require("express");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/:id/get",ordersController.getOrdersByCustomerNumber);
/**
 * @swagger
 * /orders/{id}/get :
 *   get:
 *      description: Used to get orders with this Customer Number
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: customerNumber
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:date/getPriceWithDate",ordersController.getPriceWithDate);
/**
 * @swagger
 * /orders/{date}/getPriceWithDate :
 *   get:
 *      description: Used to get prices sale with a date of this day
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: date
 *            type: date
 *            minLength: 1
 *            maxLength: 45
 *            example: 2003-02-24
 *            description: date that you want to know the total of prices sale
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
