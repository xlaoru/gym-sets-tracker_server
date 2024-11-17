const Exercise = require("../models/exercise.model");

exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find({});
        res.status(200).json(exercises);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error getting exercises");
    }
}

exports.addExercise = async (req, res) => {
    try {
        const exercise = new Exercise(req.body);
        await exercise.save();
        res.status(201).send("Exercise added");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error adding exercise");
    }
}

exports.editExercise = async (req, res) => {
    try {
        await Exercise.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send("Exercise updated");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error updating exercise");
    }
}

exports.deleteExercise = async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id);
        res.status(200).send("Exercise deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting exercise");
    }
}