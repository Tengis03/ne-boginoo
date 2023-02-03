const Link = require("../model/boginoo");

const makeid = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.createLink = async (request, response) => {
  const long = request.body.long;
  try {
    const url = await Link.create({
      long: long,
      short: makeid(5),
      user: request?.body?.user || "unknown",
    });
    response.status(200).json({ data: url });
  } catch (error) {
    response.send({ message: error.message });
  }
};
exports.getDatas = async (request, response) => {
  try {
    const data = await Link.find();
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
exports.getHistory = async (request, response) => {
  const user = request?.body?.user;
  console.log(request.body);
  if (!user) {
    return response.status(400).send({ message: "Invalid user" });
  }
  try {
    const data = await Link.find({
      user: user,
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
exports.getData = async (request, response) => {
  const short = request.body.short;
  try {
    const data = await Link.findOne({ short });
    response.send(data);
  } catch (error) {}
};
