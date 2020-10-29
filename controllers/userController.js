const UserModel = require('../models/UserModel')
const { actionSuccess, serverError } = require('../utils/helper')



exports.getAllUserList = async (req, res) => {
    try {
        let users = await UserModel.find()

        return actionSuccess(res, null, users)

    } catch (error) {
        return serverError(res, error)
    }
}
