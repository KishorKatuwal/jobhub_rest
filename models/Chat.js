const mongoose = require("mongoose");

const ChatSchema = mongoose.SchemaType(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    Users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessages: {
      type: mongoose.Schema.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

mongoose.exports = mongoose.model("Chat", ChatSchema);
