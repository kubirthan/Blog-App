import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/003/543/351/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
    },
}, {timestamps: true}
)

const User = mongoose.model('User', userSchema)

export default User