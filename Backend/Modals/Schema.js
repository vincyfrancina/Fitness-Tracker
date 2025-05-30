const mongoose = require('mongoose');

const signup = new mongoose.Schema({
    name: {
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    email: {
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    password: {
        type: String, // Consider using Date type for actual date handling
        required: true // Consider adding validation like this if applicable
    },
    birthdate:{
        type: Date,
        required: true // Consider adding validation like this if applicable
    },
    gender:{
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    country:{
        type: String,
        required: true // Consider adding validation like this if applicable
    }
});

const logup = mongoose.model('logup', signup);

module.exports = { logup };
