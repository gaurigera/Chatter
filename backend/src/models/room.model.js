// import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    ],
});

module.exports = mongoose.model("Room", roomSchema);
