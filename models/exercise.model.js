const mongoose = require("mongoose");

const ExerciseSetSchema = new mongoose.Schema({
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
});

const ExerciseSchema = new mongoose.Schema({
    dayName: {
        type: String,
        required: true,
    },
    exercises: {
        type: Map,
        of: [ExerciseSetSchema],
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;