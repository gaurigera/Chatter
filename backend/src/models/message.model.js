import mongoose from "mongoose";
const { Schema } = mongoose;

const messageModel = new Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Room", // Reference the Room model
        },
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User", // Reference the User model
        },
        content: {
            type: String,
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now, // Use the current date and time as the default
        },
        seenBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User", // Reference the User model
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", messageModel);
