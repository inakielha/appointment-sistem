const mongoose = require("mongoose");
const Users = require('../models/Users');
bcrypt = require('bcryptjs');


const createUser = async (req,res)=>{
    const {
        userEmail,userPassword, userName, userGoogle
    } = req.body;
    try{
        let newUser = {
            userEmail,
            userPassword,
            userName,
            userGoogle
        }
        if (!userGoogle){

            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            newUser.userPassword = bcrypt.hashSync(userPassword, salt);

        } else {
            newUser.userPassword = ""
        }
        await newUser.save()
        res.status(200).json(newUser)

    } catch(e){
        res.status(400).json(e)
        console.log(e)
    }
}