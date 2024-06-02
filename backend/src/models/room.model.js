import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
});

module.exports = mongoose.model("Room", roomSchema);
