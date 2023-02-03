const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.register = async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (user) {
    return response.status(400).json({ message: "user exists" });
  }

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ email, password: hashPassword });
    response.status(200).json({
      message: "user created",
      data: user.email,
    });
  } catch (error) {
    console.error(error);
  }
};

const ACCESS_TOKEN = "1234";

exports.login = async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (!user) {
    return response.status(400).json({ message: "invalid credentials" });
  }

  const match = await bcrypt.compare(password, user?.password);

  if (match) {
    const token = jwt.sign(
      {
        user: user.email,
      },
      ACCESS_TOKEN
    );
    response.status(200).json({
      message: "Амжилттай нэвтэрлээ",
      token: token,
    });
  } else {
    response.status(400).json({
      message: "failed to sign",
    });
  }
};
exports.getUser = async (request, response) => {
  const token = request?.headers?.token;
  if (!token) {
    return response.status(400).json({ message: "token not provided" });
  }
  const data = jwt.decode(token, ACCESS_TOKEN);
  response.status(200).json(data);
};
