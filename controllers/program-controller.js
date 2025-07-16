const Program = require("../models/program.model");

exports.getPrograms = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const total = await Program.countDocuments({});

        const programs = await Program.find({})
            .sort({ date: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({
            programs,
            total,
            pages: Math.ceil(total / limit),
            page,
            message: "Programs fetched successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting programs." });
    }
};

exports.addProgram = async (req, res) => {
    try {
        const program = new Program(req.body);
        await program.save();
        res.status(201).json({
            program,
            message: "Program created successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding program." });
    }
};

exports.editProgram = async (req, res) => {
    try {
        const program = await Program.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        await program.save();

        res.status(200).json({
            program,
            message: "Program edited successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating program." });
    }
};

exports.deleteProgram = async (req, res) => {
    try {
        const program = await Program.findByIdAndDelete(req.params.id);

        if (!program) {
            return res.status(404).json({ message: "Program not found." });
        }

        res.status(200).json({
            program,
            message: "Program deleted successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting program." });
    }
};
