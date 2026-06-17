const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// CREATE APPLICATION
router.post("/", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const trackingId =
      "SVS-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const application = await Application.create({
      ...req.body,
      trackingId,
    });

    res.status(201).json(application);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// GET ALL (ADMIN)
router.get("/", async (req, res) => {
  const data = await Application.find().sort({ createdAt: -1 });
  res.json(data);
});

// GET SINGLE APPLICATION BY TRACKING ID
router.get("/track/:trackingId", async (req, res) => {
  try {
    const app = await Application.findOne({
      trackingId: req.params.trackingId
    });

    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// UPDATE STATUS
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Application.findByIdAndUpdate(
//       req.params.id,
//       {
//         status: req.body.status,
//       },
//       { new: true }
//     );

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });


// UPDATE STATUS
router.put("/:id", async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json(updatedApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




module.exports = router;