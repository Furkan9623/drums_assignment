const express = require("express");
const {
  FORGOT_PASSWORD_CONTROLLER,
  RESET_PASSWORD_CONTROLLER,
} = require("../controllers/forgot-password-controller");
const forgot_router = express.Router();
forgot_router.patch("/forgot", FORGOT_PASSWORD_CONTROLLER);
forgot_router.patch("/reset", RESET_PASSWORD_CONTROLLER);
module.exports = forgot_router;
