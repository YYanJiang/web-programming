const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    res.json(about);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

const about = {
  "name": "Yanyan Jiang",
  "cwid": "10430965",
  "biography": "Hi, I came from China. My master major is computer science. ",
  "favoriteShows": ["Agents of S.H.I.E.L.D.", "Running Man", "Spider-Man and His Amazing Friends"],
  "hobbies": ["walking tour of the city", "Listen to folk song", "swim"]
}

module.exports = router;