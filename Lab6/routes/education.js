const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(education);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

const education = [
    {
      "schoolName": "No.10 High Scchool",
      "degree": "High School Degree",
      "favoriteClass": "Mathematics",
      "favoriteMemory": "Discuss problems with classmates and came back dormitory together"
    },

    {
      "schoolName": "JiangNan University",
      "degree": "Bachelor Degree",
      "favoriteClass": "Appreciation of Movie Music",
      "favoriteMemory": "participate in the Spring Festival Gala as a host"
    },

    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Master Degree",
      "favoriteClass": "Web Programing",
      "favoriteMemory": "My memorable memory there is my first English presentation"
    }

]

module.exports = router;