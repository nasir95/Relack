const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    channelName: { type: String, required: true },
    description: { type: String, required: true },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message"
      }
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Channel", channelSchema);
