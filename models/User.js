const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: false
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        postalCode: {
            type: Number,
            required: false
        },
        mobile: {
            type: Number,
            required: false
        },
        password:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }
    });

module.exports = User = mongoose.model('users', UserSchema);