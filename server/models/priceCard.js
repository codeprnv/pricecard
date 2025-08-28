import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
	name: {
		type: String,
		default: "Most Popular",
		trim: true,
		required: true,
	},
	price: {
		type: Number,
		default: 5,
		required: true,
	},

	features: {
		type: Array,
		default: ["Feature1", "Feature2", "Feature3"],
	},
});

const priceCard = mongoose.model("priceCard", cardSchema);
export default priceCard;
