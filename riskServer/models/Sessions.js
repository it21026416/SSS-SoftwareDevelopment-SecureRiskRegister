const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},

	notes: {
		type: String,
		required: false,
	},

	lastUpdatedDate: {
		type: String,
		required: false,
	},

	darkMode: {
		type: String,
		required: false,
	}
})

module.exports = mongoose.model('Session', SessionSchema);
