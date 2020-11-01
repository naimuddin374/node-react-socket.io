const bcrypt = require('bcrypt')
const {
    actionSuccess,
    serverError,
    validationError,
    createdSuccess
} = require('../utils/helper')
const ReservationModel = require('../models/ReservationModel')
const qrCodeReservationValidator = require('../validators/qrCodeReservationValidator')
const manualReservationValidator = require('../validators/manualReservationValidator')




// Get all reservation 
exports.getAllReservation = async (req, res) => {
    try {
        let result = await ReservationModel.find()
        global.io.emit('reservationEmitChannel', result)

        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}



// Get all qr code reservation 
exports.getAllQrCodeReservation = async (req, res) => {
    try {
        let result = await ReservationModel.find({ entryType: 'qr-code', status: 'upcoming' })

        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}



// Get all manual reservation 
exports.getAllManualReservation = async (req, res) => {
    try {
        let result = await ReservationModel.find({ entryType: 'manual', status: 'upcoming' })

        return actionSuccess(res, null, result)

    } catch (error) {
        return serverError(res, error)
    }
}




// Store qr code reservation 
exports.storeQrCodeReservation = async (req, res) => {
    try {
        let { phoneNumber, numberOfPerson, password } = req.body

        // Data Validation
        const validate = qrCodeReservationValidator({ phoneNumber, numberOfPerson, password })

        if (!validate.isValid) {
            return validationError(res, validate.error)
        }


        let hash = await bcrypt.hash(password, 11)

        let reservation = new ReservationModel({
            phoneNumber,
            numberOfPerson,
            password: hash,
            entryType: 'qr-code'
        })

        let result = await reservation.save()


        // Socket emit
        let totalReservation = await ReservationModel.find({ 'entryType': 'qr-code', status: 'upcoming' })
        global.io.emit('qrCodeEmitChannelPoint', totalReservation)

        return createdSuccess(res, 'Added successful', result)

    } catch (error) {
        return serverError(res, error)
    }
}





// Store manual reservation 
exports.storeManualReservation = async (req, res) => {
    try {
        let { phoneNumber, numberOfPerson, password, name, date, startedAt, endedAt } = req.body

        // Data Validation
        const validate = manualReservationValidator({ phoneNumber, numberOfPerson, password, name, date, startedAt, endedAt })

        if (!validate.isValid) {
            return validationError(res, validate.error)
        }


        let hash = await bcrypt.hash(password, 11)

        let reservation = new ReservationModel({
            phoneNumber,
            numberOfPerson,
            password: hash,
            entryType: 'manual',
            name,
            date,
            startedAt,
            endedAt
        })

        let result = await reservation.save()


        // Socket emit
        let totalReservation = await ReservationModel.find({ 'entryType': 'manual', status: 'upcoming' })
        global.io.emit('manualEmitChannelPoint', totalReservation)

        return createdSuccess(res, 'Added successful', result)

    } catch (error) {
        return serverError(res, error)
    }
}



// Store manual reservation 
exports.deleteReservation = async (req, res) => {
    try {
        let result = await ReservationModel.findByIdAndDelete(req.params.id)

        return actionSuccess(res, 'Deleted Successful.', result)
    } catch (error) {
        return serverError(res, error)
    }
}
