const express = require("express");
const {
  createLink,
  getDatas,
  getData,
  getHistory,
} = require("../controller/URL");

const boginoo = express.Router();

boginoo.post("/create", createLink);
boginoo.get("/datas", getDatas);
boginoo.post("/history", getHistory);
boginoo.post("/data", getData);

module.exports = boginoo;
