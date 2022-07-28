const mongoose = require("mongoose");

const dbConnection = async ()=>{    
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("DB ONLINE")
    }catch (e){
        console.log(e)
        throw new Error ("Error al inicializar la base de datos")
    }
}
module.exports = {
    dbConnection
}