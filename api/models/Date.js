const {Schema,model} = require ("mongoose");

const DateSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
        required: true
    }
})
module.exports = model('Date', DateSchema)
