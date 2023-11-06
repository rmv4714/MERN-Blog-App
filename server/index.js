import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";
import Router from "./routes/routes.js";
const PORT = process.env.PORT || 8000;

dotenv.config();
Connection();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", Router);

app.listen(PORT, () => console.log(`server is running ${PORT}`));

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

// Connection(USERNAME, PASSWORD);
