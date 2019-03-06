const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(story);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});


const story = {
  "storyTitle": "When my roommate is home alone",
  "story": "My roommate will go to any extreme to keep people from,knowing she is home alone.One evening when I was working late,My roommate heard a knock on the door. She ignosed it,but the knocing continued. Frantic, she began to bark, softly at first, then louder and louder. Much to her relief,the knocking soon stopped. The next day the paper boy came to the door to collect. 'I came by last night,'he told me,'but I left when your roommate barked at me!'"
};

module.exports = router;
