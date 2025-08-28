import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import priceRoutes from "./routes/routes.js";

dotenv.config({
	path: path.resolve(".env"),
});

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "";
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/prices", priceRoutes);

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log(`Connected to MongoDB successfully!`);
		app.listen(PORT, () => {
			console.log(`Server listening at PORT: ${PORT}`);
		});
	})
	.catch((err) => {
		console.error(`Error connecting to MongoDB: ${err.message}`);
	});

app.use((err, res) => {
	console.error(`Something went wrong on the server: ${err.stack}`);
	res.status(500).json({ message: "Error on the server!" });
});
