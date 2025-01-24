const mongoose = require("mongoose");

const ExerciseSetSchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
});

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: [ExerciseSetSchema],
        required: true,
    },
});

const ProgramSchema = new mongoose.Schema({
    dayName: {
        type: String,
        required: true,
    },

    exercises: {
        type: [ExerciseSchema],
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;