const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendfile('static/static.html')
});

module.exports = router;