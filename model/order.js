const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    application_id: {
        type: String,
        required: true,
        unique: true
    },
    application_type: {
        type: String,
        enum: ['admit', 'deposit'],
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_1: {
        type: String,
        required: true
    },
    contact_2: {
        type: String
    },
    street_1: {
        type: String,
        required: true
    },
    street_2: {
        type: String
    },
    landmark: {
        type: String
    },
    pin_code: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
