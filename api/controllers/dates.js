const mongoose = require("mongoose");
const Dates = require('../models/Date');
bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const createDates = async (req,res)=>{
    const {title , date, userId, customerId} = req.body;
    try{
        let newNote = new Dates({
            title,
            date,
            userId,
            customerId
        })
        await newNote.save()
        res.send({ok:true,newNote})

    }catch (e){
        console.log(e)
        res.status(400).send({ok:false, error:e})
    }
}
const getDates = async (req, res) =>{
    const {customerId} = req.body
    try {
        const notes = await Dates.find({customerId});
        res.json({
            ok:true,
            notes
        });

    }catch (e){
        console.log("hola")
        res.status(400).json({ok:false,msg:e})
    }
}
module.exports = {
    createDates,
    getDates
}