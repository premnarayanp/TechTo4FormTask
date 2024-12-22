import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    avatarImg: {
        type: String,
    },
    aadharImg: {
        type: String,
    },
    panCardImg: {
        type: String,
    },

    type: {
        type: String,
    },
    userTypes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserTypes'
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;