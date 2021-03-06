// as seen from 17-NOSQL/day2/13/UserModel.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
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
                    required: "Enter name of exercise."
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
                },
                distance: {
                    type: Number
                }
                // public/workout/line11
            }
        ],
    },
    {
        // https://mongoosejs.com/docs/tutorials/virtuals.html
        toJSON: {
            virtuals: true
        }
    }

);
// ------------------------------------------------------- //
//                                                         //
//           custom method for workout length              //
//            How do we make this function??               //
//                                                         //
// ------------------------------------------------------- //

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce( (total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// exercises.forEach(exercise => {
//     totalDuration += exercise.duration
// });
// WorkoutSchema.methods // add totalDuration of each exercise

// this creates our model from the above schema, using mongoose's model method

const Workout = mongoose.model("Workout", workoutSchema);

// export the Workout model
module.exports = Workout;