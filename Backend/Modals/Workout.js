const mongoose = require('mongoose');

const Workout = new mongoose.Schema({
    activity: {
        type: String,
        required: true // Consider adding validation like this if applicable
    },
    startTime: {
        type: Date,
        required: true // Consider adding validation like this if applicable
    },
    endTime: {
        type: Date, // Consider using Date type for actual date handling
        required: true // Consider adding validation like this if applicable
    },
    selectedDate:{
        type: Date,
        required: true // Consider adding validation like this if applicable
    },
    caloriesBurned:{
        type: String,
        required: true 
    }
});

const WorkoutDetails = mongoose.model('WorkoutDetails', Workout);

module.exports = { WorkoutDetails};
