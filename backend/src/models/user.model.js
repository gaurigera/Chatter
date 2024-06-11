import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String },
    rooms:[ {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Room", // Reference the Room model
    }],
});

module.exports = mongoose.model("User", userSchema);
