import Products from "../model/product.js";

// C: Create a new Product
const create = async ({ name, price, description, category }) => {
    try {
        const newProduct = await Products.create({ name, price, description, category });
        return newProduct._doc;
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R: Fetch all products
const list = async () => {
    try {
        // Assuming Products is your Mongoose model for products
        // const allProducts = await Products.find();
        // return allProducts;
        return await Products.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R: Fetch single products by object
const fetchById = async () => {
    try {
        return await Products.findOne({_id:id}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

// U: update a product


// D:  delete a product

export default {
    create,
    list,
    fetchById
}