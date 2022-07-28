const { Router } = require('express');
const { check } = require('express-validator');
const mongoose = require("mongoose");
const User = require('../models/Users');
const {validateField} = require("../middlewares/validateFields")
const router = Router();
const {createUser} = require("../controllers/users")

router.post(
    "/new",
    [
        check("userEmail","El mail es obligatorio").not().isEmpty(),
        check("userEmail", "El mail no es valido.").isEmail(),
        // check("userEmail").custom(value=>{
        //     return User.find({userEmail:{}})
        // })
        check("userPassword","La contraseña es obligatoria").not().isEmpty(),
        check("userPassword","La contraseña debe tener al menos 6 caracteres.")
        .not()
        .isIn(["123456","password1","god123"])
        .withMessage('No es una constraseña segura')
        .isLength({ min: 6 }),
        check('userName', userNameReq).not().isEmpty(),
        validateField
    ],
    createUser
    )