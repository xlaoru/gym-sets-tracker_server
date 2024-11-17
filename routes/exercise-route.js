const Router = require("express");
const router = new Router();

const {
    getExercises,
    addExercise,
    editExercise,
    deleteExercise
} = require("../controllers/exercise-controller.js");

router.get("/programs", getExercises);

router.post("/programs", addExercise);

router.put("/programs/:id", editExercise);

router.delete("/programs/:id", deleteExercise);

module.exports = router;