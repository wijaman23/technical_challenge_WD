const data = require("../../data/phones.json");

module.exports.list = (req, res) => {
  res.json(data);
};
