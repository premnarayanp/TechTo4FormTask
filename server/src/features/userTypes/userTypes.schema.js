import mongoose from "mongoose";
const UserSTypesSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]


}, {
    timestamps: true
});

const UserSTypes = mongoose.model('UserSTypes', UserSTypesSchema);

export default UserSTypes;