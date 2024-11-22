require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const exerciseRoutes = require("./routes/exercise-route.js");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://gym-sets-tracker-server-1.onrender.com",
}));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.end("Blog-X server is working");
});

app.use("/api", exerciseRoutes);

mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });