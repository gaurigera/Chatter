import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
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
