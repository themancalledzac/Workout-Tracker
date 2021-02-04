// initial router requirements
const db = require("../models");
const express = require("express");
const router = express.Router();

// html routes go here 
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/stats", (req, res) => {
    res.render("stats");
});

router.get("/exercise?", (req, res) => {
    res.render("exercise");
});

module.exports = router;