const Program = require("../models/program.model");

exports.getPrograms = async (req, res) => {
    try {
        const programs = await Program.find({});
        res.status(200).json(programs);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error getting programs");
    }
}

exports.addProgram = async (req, res) => {
    try {
        const program = new Program(req.body);
        await program.save();
        res.status(201).send("Program added");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error adding program");
    }
}

exports.editProgram = async (req, res) => {
    try {
        await Program.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send("Program updated");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error updating program");
    }
}

exports.deleteProgram = async (req, res) => {
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.status(200).send("Program deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting program");
    }
}