const { Router } = require('express');
const { check } = require('express-validator');
const mongoose = require("mongoose");
const User = require('../models/Users');
const {validateFields} = require("../middlewares/validateFields")
const router = Router();
const {createUser, logInUser, newToken} = require("../controllers/users");
const { validateJWT } = require('../middlewares/validateJWS');

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
        check('userName', "El nombre es obligatorio").not().isEmpty(),
        validateFields,
    ],
    createUser
    )
router.post(
    "/",
    [
        check("userEmail","El mail es obligatorio").not().isEmpty(),
        check("userEmail", "El mail no es valido.").isEmail(),
        // check("userPassword","La contraseña es obligatoria").not().isEmpty(),
        // check("userPassword","La contraseña debe tener al menos 6 caracteres.")
        // .isLength({ min: 6 }),
        validateFields
    ],
    logInUser
)
router.get("/", validateJWT, newToken);

    module.exports = router