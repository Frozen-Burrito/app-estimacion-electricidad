import { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [ true, "The product's ID is required."],
        unique: true,
    },

    imageUrl: {
        type: String,
    },

	description: {
        type: String
    },

    features: [{
      type: String
    }],
    
	price: {
        type: Number,
    },

	discountPercent: {
        type: Number,
    },

    creationTime: {
        type: String,
    },
});

export default ProductSchema;