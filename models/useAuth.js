const mongoose = require('mongoose');

const useAuthSchema = new mongoose.Schema({
	idToken: { type: String },
	userId: { type: String },
	email: { type: String },
	fullName: { type: String },
	photoUrl: { type: String },
});

const UseAuth = mongoose.model('UseAuth', useAuthSchema);

module.exports = UseAuth;
