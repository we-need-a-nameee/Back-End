const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
} = require("../controllers/authController");
const { check } = require("express-validator");

// Register route
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  registerUser
);

// Login route
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);

// Email verification route
router.get("/verify/:token", verifyEmail);

module.exports = router;
