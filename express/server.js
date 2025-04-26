import express from "express";
import mongoose from "mongoose";
import { router } from "../route/apiRoute.js";
import dotenv from "dotenv";
import cors from "cors";

// configures the .env file to access variables
dotenv.config();

// connect to mongoose
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// add express
const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log("running");
})
// allows backend to populate frontend
app.use(cors({ origin: "http://localhost:5173", credentials: "true " }));

// allows json format
app.use(express.json());

// set up for router
app.use('/', router);

// closes the server 
async function shutdown() {
    server.close();
    await mongoose.disconnect();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);