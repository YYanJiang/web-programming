const express = require("express");
const router = express.Router();
const data = require("../data");
const palindromes = data.palindromes;

router.get("/static", (req, res) => {
  res.render("palindromes/static", {});
});

router.get("/server", (req, res) => {
  res.render("palindromes/server", {});
});

router.post("/server", (req, res) => {
  let text = req.body.textarea;
  let result;
  try {
      result = palindromes.isPalindrome(text);
  } catch (e) {
    res.render("palindromes/server", {
      text: text,
      error: e
    });
    return;
  }
  res.render("palindromes/server", {
    text: text,
    class: result
  });
});


module.exports = router;