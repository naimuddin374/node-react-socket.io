const TableModel = require('../models/TableModel')
const { actionSuccess, serverError, validationError, badRequest, updatedSuccess, createdSuccess } = require('../utils/helper')


// Get all table
exports.getAllTableList = async (req, res) => {
    try {
        let result = await TableModel.find()
        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}


// Get all empty table
exports.getAllEmptyTable = async (req, res) => {
    try {
        let result = await TableModel.find({ status: 'empty' })
        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}


// Get all booked table 
exports.getAllBookedTable = async (req, res) => {
    try {
        let result = await TableModel.find({ status: 'book' })
        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}


// Get all booked table 
exports.deleteTable = async (req, res) => {
    try {
        let result = await TableModel.findByIdAndDelete(req.params.id)

        return actionSuccess(res, 'Table deleted successful.', result)

    } catch (error) {
        return serverError(res, error)
    }
}




// Store new table 
exports.storeNewTable = async (req, res) => {
    try {

        let { tableNumber } = req.body

        let oldData = await TableModel.findOne({ tableNumber })
        if (oldData) {
            return badRequest(res, null, 'This table already exist!')
        }

        if (!tableNumber) {
            return validationError(res, { tableNumber: 'Table number field is required!' })
        }

        let table = new TableModel({
            tableNumber
        })

        let result = await table.save()
        return createdSuccess(res, 'Table added successful', result)

    } catch (error) {
        return serverError(res, error)
    }
}




// Update table 
exports.updateTable = async (req, res) => {
    try {

        let _id = req.params.id

        let { tableNumber, status } = req.body

        let error = {}
        if (!tableNumber) {
            error.tableNumber = 'Table number field is required!'
        }
        if (!status) {
            error.status = 'Status field is required!'
        }
        if (Object.keys(error).length !== 0) {
            return validationError(res, error)
        }


        let result = await TableModel.findByIdAndUpdate({ _id }, { $set: { tableNumber, status } }, { new: true })
        return updatedSuccess(res, result._doc, 'Table updated successful.')

    } catch (error) {
        return serverError(res, error)
    }
}

