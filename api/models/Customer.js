const {Schema,model} = require ("mongoose");

const CustomerSchema = new Schema({
    customerEmail: {
        type: String,
        unique: true,
        required: true
    },
    customerPassword: {
        type: String,
    },
    customerName: {
        type: String
    }
})
module.exports = model('Customer', CustomerSchema)
