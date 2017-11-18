const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	provider: String,
	providerId: String,
	displayName: String,
	emails: Array,
	gender: String,
	dateCreated: {
		type: Date,
		default: Date.now
	},
	photos: Object,
	credits: {
		type: Number,
		default: 0
	}
});

mongoose.model('users', userSchema);
