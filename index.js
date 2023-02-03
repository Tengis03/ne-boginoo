const express = require("express");
const { connect } = require("./database/data");
const cors = require("cors");
const person = require("./router/userRouter");
const boginoo = require("./router/boginooRouter");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", person);
app.use("/URL", boginoo)

connect();

app.listen(PORT, () => {
  console.log(`Server is running at localhost ${PORT}`);
});
