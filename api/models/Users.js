const {Schema,model} = require ("mongoose");

const UserSchema = new Schema({
    userEmail: {
        type: String,
        unique: true,
        required: true
    },
    userPassword: {
        type: String,
    },
    userName: {
        type: String
    }
})

module.exports = model('User', UserSchema)