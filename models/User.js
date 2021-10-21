const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: "Please provide a username.",
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: "Please enter your email.",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ]
    }
);

const User = model("User", UserSchema);

module.exports = User;