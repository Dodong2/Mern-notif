const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
})

const UserModel = mongoose.model('userlists', UserSchema)
module.exports = UserModel

