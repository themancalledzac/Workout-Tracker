// initial router requirements
// or just say const router = require("express").Router();
const { response } = require("express");
const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

// api router calls go here
// we reference public/api.js

// ------------------------------------------------------------------ //
//                           getLastWorkout                           //
//                                get                                 //
//                          "/api/workouts"                           //
// ------------------------------------------------------------------ //

router.get("/api/workouts", async (req, res) => {
    try {
        await Workout.find({})
            .sort({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// ------------------------------------------------------------------ //
//                            addExercise                             //
//                                put                                 //
//                        "/api/workouts/:id"                         //
// https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate //
// ------------------------------------------------------------------ //

router.put("/api/workouts/:id", async ({ body, params }, res) => {
    try {
        await Workout.findByIdAndUpdate(
            params.id, // id
            { $push: { exercises: body } }, // update
            { new: true, runValidators: true } // options
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// ------------------------------------------------------------------ //
//                          createWorkout                             //
//                              post                                  //
//                         "/api/workouts"                            //
// ------------------------------------------------------------------ //
router.post("/api/workouts", async ({ body }, res) => {
    try {
        Workout.create()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// router.post("/api/workouts", async ({ body }, res) => {
//     try {
//         var workout = new Workout(body);
//         var result = await workout.save();
//         res.json(result);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// })

// ------------------------------------------------------------------ //
//                        getWorkoutsInRange                          //
//                               get                                  //
//                      "/api/workouts/range"                         //
// ------------------------------------------------------------------ //
// references function: 
router.get("/api/workouts/range", async (req, res) => {
    try {
        await Workout.find({})
            .limit(7)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});


module.exports = router;