const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: String,
    createdOn: Date,
    role: String
});

module.exports = mongoose.model('User', UserSchema);