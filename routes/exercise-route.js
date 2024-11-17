const Router = require("express");
const router = new Router();

const {
    getExercises,
    addExercise,
} = require("../controllers/exercise-controller.js");

router.get("/", getExercises);

router.post("/add", addExercise);

module.exports = router;