const express = require("express");
const {getUser} = require('../controllers/userController');


const user = (app) => {
  const router = express.Router();
  app.use("/api/user", router);
  // router.get("/", getKittens);

  router.post("/", getUser);
 
};

module.exports = user;
