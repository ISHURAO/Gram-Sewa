const express = require("express");
const router = express.Router();

router.get("/stats", (req, res) => {
  res.json({
    villages: 124,
    projects: 56,
    fundsUtilized: "₹12.5 Cr"
  });
});

module.exports = router;
