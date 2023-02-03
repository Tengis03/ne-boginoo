const express = require("express");
const { register, login, getUser } = require("../controller/auth");
const person = express.Router();

// const middleware = (req , res, next) => {
//     const ticket = req.body.ticket;

//     if (ticket) {
//         next()
//     } else {
//         res.status(400).json({ message : "Invalid ticket"})
//     }
// }
// const getSome = (req , res, next) => {
//     res.status(200).json({
//         message : "success",
//         data : ["links" , "link"]
//     }).
// }

person.post("/register", register);
person.post("/login", login);
person.get("/", getUser);

module.exports = person;
