const mongoose = require("mongoose");
const Customers = require('../models/Customer');
bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");



const createCustomer = async (req,res)=>{
    const {
        customerEmail, customerPassword, customerName, customerGoogle, profession,adress,image
    } = req.body;
    try{
        let newCustomer = new Customers({
            customerEmail,
            customerPassword,
            customerName,
            customerGoogle,
            profession,
            adress,
            image
        })
        if (!customerGoogle){

            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            newCustomer.customerPassword = bcrypt.hashSync(customerPassword, salt);

        } else {
            newCustomer.customerPassword = ""
        }
        await newCustomer.save()
        newCustomer.ok = true;
        res.status(200).json({newCustomer,ok:true})

    } catch(e){
        res.status(400).json({ok:false,error:e})
        console.log(e)
    }
}

const logInCustomer = async (req,res)=>{
const {customerPassword,customerEmail} = req.body;
try {
    const customer = await Customers.findOne({customerEmail:customerEmail})
    if(!customer){
        return res.status(400).json({
            ok:false,
            msg: "Cliente no encontrado"
        })
    }
    const validPassword = bcrypt.compareSync(customerPassword, customer.customerPassword)
    if (!validPassword){
        return res.status(400).json({ok:false,msg:"Contraseña incorrecta"})
    }
    const customerForToken = {
        id: customer._id,
        customerName: customer.customerName
    }
    const token = jwt.sign(customerForToken, process.env.SECRET,{expiresIn: 60 * 60 * 24 * 7})
    res.send({
        ok:true,
        name: customer.customerName,
        email: customerEmail,
        token
    })

} catch (e){
    console.log(e)
    res.status(400).json({ok:false,error:e})
    
}
}
const getProfession = async(req,res)=>{
    try{
        let allProfessions = []
        const professions = await Customers.find({})
        // professions.forEach((el)=>{
        //     allProfessions.push(el.profession)
        // })
        res.json(professions)
    }catch (e){
        console.log(e)
        res.status(400).json({ok:false,msg:e})
    }
}
module.exports = {
    createCustomer,
    logInCustomer,
    getProfession
}