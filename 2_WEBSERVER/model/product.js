import mongoose, { Schema } from "mongoose";

// Create Product Schema
const productSchema = new Schema({
    name:{
        type : String,
        required: [true, "Name is required"], // validation
        unique: true,
    },
    price:{
        type: Number,
        required: true,
        min: [0, "Price must be greater than or equals 0"]
    },
    description:{
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

// generate product model
const Products = mongoose.model("products", productSchema);

export default Products;