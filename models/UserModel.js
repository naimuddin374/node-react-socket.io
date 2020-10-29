const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        default: null
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports = UserModel