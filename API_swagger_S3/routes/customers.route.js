const customersController = require("../controllers/customers.controller");
const express = require("express");
let router = express.Router();

router.get("/",customersController.index);
router.get("/list",customersController.getAll);
/**
 * @swagger
 * /customers/list:
 *   get:
 *      description: Used to get all customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/count",customersController.getNumberCustomers);
/**
 * @swagger
 * /customers/count:
 *   get:
 *      description: Used to get number of customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/:id/get",customersController.getCustomerById);
/**
 * @swagger
 * /customers/{id}/get :
 *   get:
 *      description: Used to get customer with this id
 *      tags:
 *          - customers
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
router.post("/create",customersController.createCustomers);
/**
 * @swagger
 * /customers/create:
 *   post:
 *      description: Used to create customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: body
 *            name: Customers
 *            description: Customers data
 *            schema:
 *              type: object
 *              required:
 *                 - customerNumber
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - city
 *                 - state
 *                 - postalCode
 *                 - country
 *                 - salesRepEmployeeNumber
 *                 - creditLimit
 *              properties:
 *                  customerNumber:
 *                      type: integer
 *                      example: 1
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: ICO corp
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Dupond
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Bertrand
 *                  phone:
 *                      type: integer
 *                      example: 0601020304
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: 1 rue du pont
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: appt 5
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Belfort
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Territoire de Belfort
 *                  postalCode:
 *                      type: integer
 *                      example: 90000
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: France
 *                  salesRepEmployeeNumber:
 *                      type: integer
 *                      example: 87
 *                  creditLimit:
 *                      type: integer
 *                      example: 4500
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/:customerNumber/update",customersController.updateCustomers);
/**
 * @swagger
 * /customers/{customerNumber}/update:
 *  put:
 *      description: Used to update customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            description: customer number
 *            required: true
 *          - in: body
 *            name: customer
 *            description: customer data with new values of properties
 *            schema:
 *              type: object
 *              required:
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - city
 *                 - state
 *                 - postalCode
 *                 - country
 *                 - salesRepEmployeeNumber
 *                 - creditLimit
 *              properties:
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: FGO
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Grou
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Kamel
 *                  phone:
 *                      type: integer
 *                      example: 8954123879
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: 71 avenue Leclerc
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example:
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Troyes
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Aube
 *                  postalCode:
 *                      type: integer
 *                      example: 10000
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: France
 *                  salesRepEmployeeNumber:
 *                      type: integer
 *                      example: 1165
 *                  creditLimit:
 *                      type: integer
 *                      example: 6120
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/:id/delete",customersController.delete);
/**
 * @swagger
 * /customers/{id}/delete:
 *   delete:
 *      description: Used to delete customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: customerNumber
 *            required : true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;