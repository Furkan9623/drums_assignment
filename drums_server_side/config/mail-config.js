const nodemailer = require("nodemailer");
require("dotenv").config();
const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.Email_User, pass: process.env.Email_Pass },
});

const SEND_OTP_MAIL = async (email, otp) => {
  try {
    let createMail = await Transporter.sendMail({
      from: "any@gmail.com",
      to: email,
      subject: "FORGOT PASSWORD",
      html: `
         <h3>FORGOT PASSWORD</h3>
         <p>This is your one time password <span style = "color:blue">${otp}</span> valid in 2 minutes</p>
      `,
    });
    return createMail;
  } catch (error) {
    throw error;
  }
};

module.exports = { SEND_OTP_MAIL };
