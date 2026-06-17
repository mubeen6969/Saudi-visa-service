const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    email: String,
    country: String,
    visaType: String,
    travelDate: String,
    message: String,
    trackingId: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);