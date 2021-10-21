const { Schema, model, Types } = require("mongoose");
//import date format 
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        // reactions:
    }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;