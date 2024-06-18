import mongoose from "mongoose";
const { Schema } = mongoose;

const messageModel = new Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Room", // Reference the Room model
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User", // Reference the User model
        },
        data: {
            type: String,
            required: true,
        },
        sentAt: {
            type: Date,
            immutable: true,
            default: Date.now, // Use current date as default
        },
        seenBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User", // Reference the User model
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", messageModel);
