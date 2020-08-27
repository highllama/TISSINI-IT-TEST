const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function getUser(req, res) {
  try {
    const { jsToken } = req.body;
    const verifiedToken = jwt.verify(jsToken, process.env.AUTH_JWT_SECRET);
    if (verifiedToken) {
      const token = jwt.decode(jsToken);
      const user = await User.findById(token._id);
      res.status(200).send({ token, user });
    } else res.status(401).send({ message: "Unauthorized" });
  } catch (error) {
    res.status(400).send({ error });
  }
}

module.exports = {
  getUser,
};
