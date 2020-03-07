const Channel = require("../models/channel");
const Message = require("../models/message");

module.exports = {
  create,
  multipleChannels,
  multipleMessages,
  messageCreate
};

async function create(req, res) {
  try {
    await Channel.create(req.body);
    multipleChannels(req, res);
  } catch (err) {
    res.status(410).json(err);
  }
}

async function multipleChannels(req, res) {
  const channels = await Channel.find({}).sort("channelName");
  res.json(channels);
}

async function multipleMessages(req, res) {
  const channelWithMessages = await Channel.findById(req.params.id).populate(
    "messages"
  );
  // console.log(channelWithMessages);
  res.json(channelWithMessages);
}

async function messageCreate(req, res) {
  try {
    const channel = await Channel.findById(req.params.id);
    const message = await Message.create(req.body);

    channel.messages.push(message._id);
    await message.save();
    await channel.save();
    console.log(channel);
    res.json({ channel });
  } catch (error) {
    console.log(error);
    // handle the error if or when it happens
  }
}

// async function messageCreate(message) {
//   const channel = new Channel({
//     message
//   });

//   const result = await channel.save();
//   console.log(result);
// }
