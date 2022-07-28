const express = require("express")
const {dbConnection} = require("./db/config.js")

require('dotenv').config()
const app = express()

dbConnection()

app.set("port",3000)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(app.get("port"),()=>{
    console.log(`app corriendo en puerto ${app.get("port")}` )
})