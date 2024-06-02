import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String },
});

module.exports = mongoose.model("User", userSchema);
