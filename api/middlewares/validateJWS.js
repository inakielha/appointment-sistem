const { response } = require("express")
const jwt = require('jsonwebtoken')


const validateJWT = (req, res = response, next) => {
    const bearerToken = req.header('Authorization');

    if (!bearerToken) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }
    let token = bearerToken.substring(7)

    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET
        );
            
        req.uid = uid;
        req.name = name;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
    next();
}

module.exports = {
    validateJWT
}