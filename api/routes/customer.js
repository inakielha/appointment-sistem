const { Router } = require('express');
const { check } = require('express-validator');
const mongoose = require("mongoose");
const Customer = require('../models/Customer');
const {validateFields} = require("../middlewares/validateFields")
const router = Router();
const {createCustomer, logInCustomer,getProfession} = require("../controllers/customers")

router.post(
    "/new",
    [
        check("customerEmail","El mail es obligatorio").not().isEmpty(),
        check("customerEmail", "El mail no es valido.").isEmail(),
        // check("userEmail").custom(value=>{
        //     return User.find({userEmail:{}})
        // })
        check("customerPassword","La contraseña es obligatoria").not().isEmpty(),
        check("customerPassword","La contraseña debe tener al menos 6 caracteres.")
        .not()
        .isIn(["123456","password1","god123"])
        .withMessage('No es una constraseña segura')
        .isLength({ min: 6 }),
        check('customerName', "El nombre es obligatorio").not().isEmpty(),
        check("adress","profession is required").not().isEmpty(),
        check("profession","profession is required").not().isEmpty(),
        validateFields
    ],
    createCustomer
    )
router.post(
    "/",
    [
        check("customerEmail","El mail es obligatorio").not().isEmpty(),
        check("customerEmail", "El mail no es valido.").isEmail(),

        // check("userPassword","La contraseña es obligatoria").not().isEmpty(),
        // check("userPassword","La contraseña debe tener al menos 6 caracteres.")
        // .isLength({ min: 6 }),
        validateFields
    ],
    logInCustomer
)
router.get(
    "/",
    getProfession
)
    module.exports = router