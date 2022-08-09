const mongoose = require("mongoose");
const Users = require('../models/Users');
bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const createUser = async (req,res)=>{
    const {
        userEmail,userPassword, userName, userGoogle
    } = req.body;
    try{
        let newUser = new Users({
            userEmail,
            userPassword,
            userName,
            userGoogle
        })
        if (!userGoogle){

            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            newUser.userPassword = bcrypt.hashSync(userPassword, salt);

        } else {
            newUser.userPassword = ""
        }
        await newUser.save()
        newUser.ok = true;
        res.status(200).json({newUser,ok:true})

    } catch(e){
        res.status(400).json({ok:false,error:e})
        console.log(e)
    }
}

const logInUser = async (req,res)=>{
const {userPassword,userEmail} = req.body;
try {
    const user = await Users.findOne({userEmail:userEmail})
    if(!user){
        return res.status(400).json({
            ok:false,
            msg: "Usuario no encontrado"
        })
    }
    const validPassword = bcrypt.compareSync(userPassword, user.userPassword)
    if (!validPassword){
        return res.status(400).json({ok:false,msg:"Contraseña incorrecta"})
    }
    const userForToken = {
        id: user._id,
        name: user.userName,
        type: "user"
    }
    const token = jwt.sign(userForToken, process.env.SECRET,{expiresIn: 60 * 60 * 24 * 7})
    res.send({
        ok:true,
        name: user.userName,
        email: userEmail,
        id: user._id,
        user: true,
        type: "user",
        token
    })

} catch (e){
    console.log(e)
    res.status(400).json({ok:false,error:e})
    
}
}
const newToken = async (req , res = response)=>{
    const { id, name , type } = req;
    try{
        const userForToken = {
            id,
            name,
            type
        }
        const token = jwt.sign(userForToken, process.env.SECRET,{expiresIn: 60 * 60 * 24 * 7})
        res.send({
            ok:true,
            name: name,
            id: id,
            type,
            token
        })
    }catch (e){
        console.log(e)
        res.status(404).json("not found")
    }

}
module.exports = {
    createUser,
    logInUser,
    newToken
}