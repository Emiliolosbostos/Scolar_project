const officesController = require("../controllers/offices.controllers");
const express = require("express");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/list",officesController.getAll);
/**
 * @swagger
 * /offices/list:
 *   get:
 *      description: Used to get all offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/count",officesController.getNumberOfOffices);
/**
 * @swagger
 * /offices/count:
 *   get:
 *      description: Used to get number of offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/create",officesController.creatOffice);
/**
 * @swagger
 * /offices/create:
 *   post:
 *      description: Used to create office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: body
 *            name: Offices
 *            description: offices data
 *            schema:
 *              type: object
 *              required:
 *                 - officeCode
 *                 - city
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - state
 *                 - country
 *                 - postalCode
 *                 - territory
 *              properties:
 *                  officeCode:
 *                      type: integer
 *                      example: 8
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: Marseille
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: +44 20 7877 1234
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 25 Leclerc Street
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: apt.78
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example:
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: France
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: 13000
 *                  territory:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: EMEA
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id/delete",officesController.delete);
/**
 * @swagger
 * /offices/{id}/delete:
 *   delete:
 *      description: Used to delete office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: officeCode
 *            required : true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/:officeCode/update",officesController.updateOffices);
/**
 * @swagger
 * /offices/{officeCode}/update:
 *  put:
 *      description: Used to update office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
 *            type: integer
 *            description: office code
 *            required: true
 *          - in: body
 *            name: office
 *            description: office data with new values of properties
 *            schema:
 *              type: object
 *              required:
 *                 - city
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - state
 *                 - country
 *                 - postalCode
 *                 - territory
 *              properties:
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: Belfort
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: +44 20 7877 1234
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 25 Leclerc Street
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: apt.45
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example:
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: France
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: 90000
 *                  territory:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: EMEA
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;