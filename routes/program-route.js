const Router = require("express");
const router = new Router();

const {
    getPrograms,
    addProgram,
    editProgram,
    deleteProgram
} = require("../controllers/program-controller.js");

router.get("/programs", getPrograms);

router.post("/programs", addProgram);

router.put("/programs/:id", editProgram);

router.delete("/programs/:id", deleteProgram);

module.exports = router;