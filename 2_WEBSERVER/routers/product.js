import express from "express";
import { productController } from "../controller/index.js";

const productRouter = express.Router();

// GET: /products -> get all products
productRouter.get('/', productController.getAllProducts);



// GET: /products/:id -> get product by id
productRouter.get('/:id', productController.getProductByObjectId);


// POST: /products ->  Create a new product
productRouter.post("/", productController.createProduct);

export default productRouter;