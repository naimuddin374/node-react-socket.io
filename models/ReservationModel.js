const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ReservationModelSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        default: null
    },
    numberOfPerson: {
        type: Number,
        default: 1,
    },
    password: {
        type: String,
        require: true,
    },
    serialNumber: {
        type: Number,
        default: 1
    },
    entryType: {
        type: String, // qr-code = QR Code, manual = Manual Reservation
        required: true
    },
    date: {
        type: Date,
        default: null
    },
    startedAt: {
        type: String,
        default: null
    },
    endedAt: {
        type: String,
        default: null
    },
    innerTableId: {
        type: Schema.Types.ObjectId,
        ref: 'Table',
        default: null
    },
    status: {
        type: String,
        trim: true,
        default: 'upcoming' //upcoming, Ongoing, Canceled, Completed
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ReservationModel = mongoose.model('ReservationModel', ReservationModelSchema);
module.exports = ReservationModel