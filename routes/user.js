const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { signUp } = require("../controllers/users.js");

const userController = require("../controllers/users.js");


router.route("/signup")
    .get(userController.redenSignUpForm)
    .post(wrapAsync(userController.signUp))


router.route("/login")
    .get(userController.rederLogInForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.logIn)


router.get("/logout", userController.logOut);

module.exports = router;