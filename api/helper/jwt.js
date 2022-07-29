const jwt = require("jsonwebtoken");

const generateJWT = (uid, name) => {
    return new Promise((resolve,reject) => {
        const payload = {uid, name};
        jwt.sign(payload,process.env.SECRET,{
            expiresIn: "72h"
        }, (err, token)=>{
            if (err) {
                console.log(err)
                reject ("err: No se pudo generar el token")
            }
            resolve (token);
        })
    })
}
module.exports = generateJWT