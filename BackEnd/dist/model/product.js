import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ReviewSchema } from './review.js';
export const ProductSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        minLength: 2,
        maxLength: 5,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    tags: [{
            type: String,
            enum: ["new", "hot", "sale", "popular", "featured", "premium", "limited", "trending"],
            required: true,
        }],
    stock: {
        type: Number,
        minLength: 1,
        maxLength: 10,
        required: true,
    },
    reviews: [ReviewSchema]
}, { timestamps: true });
export const Products = mongoose.model("products", ProductSchema);
// {"_id":1,"name":"Product 1","category":"Electronics","price":100,"rating":4.5,"tags":["new","hot"],"stock":50,"reviews":[{"user":"Alice","score":5},{"user":"Bob","score":4}]},
//# sourceMappingURL=product.js.map