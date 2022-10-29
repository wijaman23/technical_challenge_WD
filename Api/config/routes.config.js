const express = require("express");
const router = express.Router();
const phones = require("../controllers/phone.controller");

router.get("/", phones.list);

module.exports = router;
