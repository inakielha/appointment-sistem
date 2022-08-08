const { Router } = require('express');
const { check } = require('express-validator');
const mongoose = require("mongoose");
const Date = require('../models/Date');
const {validateFields} = require("../middlewares/validateFields")
const router = Router();
const {createDates, getDates} = require("../controllers/dates");
const { validateJWT } = require('../middlewares/validateJWS');

router.post(
    "/new",
    [
        check("date","the date is required").not().isEmpty(),
        validateFields,
        validateJWT
    ],
    createDates
    )
router.post(
    "/",
    [
        check("customerId","The customer id is required").not().isEmpty(),
        validateFields,
        validateJWT
    ],
    getDates
)
module.exports = router
