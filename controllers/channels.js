const Channel = require("../models/channel");

module.exports = {
  create,
  channelName
};

async function create(req, res) {
  try {
    await Channel.create(req.body);
    channelName(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function channelName(req, res) {
  const channels = await Channel.find({});
  res.json(channels);
}
