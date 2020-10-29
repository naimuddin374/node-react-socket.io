const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserModel = require('../models/UserModel')
const { actionSuccess, createdSuccess, badRequest, serverError } = require('../utils/helper')

require('dotenv').config()



// Token Generate
async function tokenGenerator(result) {
    let token = await jwt.sign({
        _id: result._id,
        uniqueCode: result.uniqueCode,
        name: result.name,
        username: result.username,
        phoneNumber: result.phoneNumber,
        // status: result.status
    }, process.env.SECRET_KEY, { expiresIn: '15d' })
    return token
}



exports.registerNewUser = async (req, res) => {
    try {
        let { name, username, password, phoneNumber } = req.body

        // Check already 
        let oldUser = await UserModel.findOne({ username })
        if (oldUser) {
            return badRequest(res, null, 'This username already exist!')
        }

        let hash = await bcrypt.hash(password, 11)

        let user = new UserModel({
            name,
            username,
            password: hash,
            phoneNumber
        })
        let result = await user.save()
        return createdSuccess(res, 'Registered Successful.', result)

    } catch (error) {
        return serverError(res, error)
    }
}