// initial router requirements
const express = require("express");
const router = express.Router();
const path = require("path");
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes


// html routes go here 
// router.get("/", (req, res) => {
//     res.render("index");
// });

// https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
// uncertainty found here
// why do this route and not the one found in class?


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// app.get("/stats", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.get("/exercise?", (req, res) => {
//     res.render("exercise");
// });

module.exports = router;