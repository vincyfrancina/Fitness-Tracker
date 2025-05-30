const mongoose = require("mongoose")

const ProfileForm = new mongoose.Schema({
	month: {
		type: String,
		required: true,
	},
	day: {
		type: Number,
		required: true,
	},
	activities: {
		type: Array,
		required: true,
	},
})

const Dashboard = mongoose.model("Dashboard", ProfileForm)

module.exports = { Dashboard }
