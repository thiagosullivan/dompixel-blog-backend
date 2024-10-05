const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImagePath: {
            type: String,
            default: "",
        },
        postsBlog: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;