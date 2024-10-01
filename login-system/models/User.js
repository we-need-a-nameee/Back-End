const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // birthDate: {
  //   type: Date,
  //   required: true,
  // },
  // gender: {
  //   type: String,
  //   required: true,
  // },
  // bloodType: {
  //   type: String,
  //   required: true,
  // },
  // picture: {
  //   type: String,
  // },
  // medicalHistory: {
  //   type: String,
  // },
  // allergies: {
  //   type: String,
  // },
  // currentMedications: {
  //   type: String,
  // },
  // priorSurgeries: {
  //   type: String,
  // },
  // healthInsurance: {
  //   type: Boolean,
  //   required: true,
  // },
  // // Field for insurance provider if healthInsurance is true
  // insuranceProvider: {
  //   type: String,
  //   required: function () {
  //     return this.healthInsurance === true;
  //   },
  // },
  // // Field for insurance card photo if healthInsurance is true
  // insuranceCard: {
  //   type: String,
  //   required: function () {
  //     return this.healthInsurance === true;
  //   },
  // },
  // promoCode: {
  //   type: String,
  // },
  // termsAndConditions: {
  //   type: Boolean,
  //   required: true,
  // },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
