require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const programRoutes = require("./routes/program-route.js");

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.end("Gym Sets Tracker server is working");
});

app.use("/api", programRoutes);

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