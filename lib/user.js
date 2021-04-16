const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	}
});


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
