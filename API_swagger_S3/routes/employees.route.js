const employeesController = require("../controllers/employees.controller");
const express = require("express");
const customersController = require("../controllers/customers.controller");
let router = express.Router();

router.get("/list/getAll",employeesController.getAll);
/**
 * @swagger
 * /employees/list/getAll:
 *   get:
 *      description: Used to get all employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/list2BestEmployees",employeesController.getTwoBestEmployees);
/**
 * @swagger
 * /employees/list2BestEmployees:
 *   get:
 *      description: Used to get 2 employees with the most customers
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/list2BestEmployeesByCredit",employeesController.getTwoBestEmployeesByCredit);
/**
 * @swagger
 * /employees/list2BestEmployeesByCredit:
 *   get:
 *      description: Used to get 2 employees with the most credits customers
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id/getCustomer",employeesController.getCustomerByEmployeeId);
/**
 * @swagger
 * /employees/{id}/getCustomer:
 *   get:
 *      description: Used to get customer with this employeeId
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: salesRepEmployeeNumber
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id/get",employeesController.getEmployeeById);
/**
 * @swagger
 * /employees/{id}/get :
 *   get:
 *      description: Used to get employee with this id
 *      tags:
 *          - employees
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

router.get("/:id/getEmployeeByOfficeCode",employeesController.getEmployeeByOfficeCode);
/**
 * @swagger
 * /employees/{id}/getEmployeeByOfficeCode :
 *   get:
 *      description: Used to get employee with this office code
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: office code
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id/getEmployeeByReportCode",employeesController.getEmployeeByReportCode);
/**
 * @swagger
 * /employees/{id}/getEmployeeByReportCode :
 *   get:
 *      description: Used to get employee with this report code
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: report code
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