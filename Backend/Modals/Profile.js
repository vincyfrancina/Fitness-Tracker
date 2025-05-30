const mongoose = require('mongoose');

const ProfileForm = new mongoose.Schema({
    weight: {
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    heightFeet: {
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    city: {
        type: String, // Consider using Date type for actual date handling
        required: true // Consider adding validation like this if applicable
    },
    state:{
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    pincode:{
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    location:{
        type: String,
        required: true // Consider adding validation like this if applicable
    }
});

const ProfileDetails = mongoose.model('ProfileDetails', ProfileForm);

module.exports = { ProfileDetails};
