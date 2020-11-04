const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TableModelSchema = new Schema({
    tableNumber: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: 'empty' //empty, book
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const TableModel = mongoose.model('TableModel', TableModelSchema);
module.exports = TableModel