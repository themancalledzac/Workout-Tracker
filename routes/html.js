// initial router requirements
const express = require("express");
const router = express.Router();
const path = require("path");
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes



// https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
// https://www.codota.com/code/javascript/functions/express/Response/sendFile
// uncertainty found here
// why do this route and not the one found in class?
// res.render only works with a templating engine, like handlebars

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;