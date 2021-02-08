// as seen from 17-NOSQL/day2/13/UserModel.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of exercise."

            },
            name: {
                type: String,
                trim: true,
                required: "Enter your name."
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter duration of exercise."
            },
            weight: {
                type: Number,
                trim: true,
                required: "Enter your current weight."
            },
            reps: {
                type: Number,
                trim: true,
                required: "Enter number or reps."
            },
            sets: {
                type: Number,
                trim: true,
                required: "Enter number of sets."
            }
        }
    ]

});

// this creates our model from the above schema, using mongoose's model method

const Workout = mongoose.model("Workout", WorkoutSchema);

// export the Workout model
module.exports = Workout;