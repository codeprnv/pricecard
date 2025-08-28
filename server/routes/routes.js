import express from "express";
import priceCard from "../models/priceCard.js";

const router = express.Router();

// Get all card details

router.get("/", async (req, res) => {
	try {
		const cards = await priceCard.find();
		res.status(200).json(cards);
	} catch (err) {
		console.error(`Error fetching the cards from database!: ${err.message}`);
		res.status(500).json({ message: "Error fetching cards" });
	}
});

// Add card details

router.post("/", async (req, res) => {
	const data  = req.body;
	try {
		if (!data || Object.keys(data).length === 0) {
			return res.status(400).json({ message: "Data cannot be empty" });
		}
		const newPriceCard = new priceCard({
			name: data?.name,
			price: data?.price,
			features: data?.features,
		});

		await newPriceCard.save();
		res.status(201).json({ message: "New price card added to database" });
	} catch (err) {
		console.error(`Error cannot create new price card`);
		res.status(400).json({ message: "Error creating new price card" });
	}
});

export default router;
