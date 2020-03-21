const express = require("express");
const router = express.Router();

router.get("/", (req, res, err) => {
    res.status(200).send("COVID-19");
});

module.exports = router;