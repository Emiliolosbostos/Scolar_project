const productLinesController = require("../controllers/productLines.controller");
const express = require("express");
let router = express.Router();

router.get("/list/getAll",productLinesController.getAllProductLines);
/**
 * @swagger
 * /productLines/list/getAll:
 *   get:
 *      description: Used to get all product lines
 *      tags:
 *          - productLines
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;