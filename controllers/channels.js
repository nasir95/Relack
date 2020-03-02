const Channel = require("../models/channel");

module.exports = {
  create,
  multipleChannels
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
  const channels = await Channel.find({});
  res.json(channels);
}
