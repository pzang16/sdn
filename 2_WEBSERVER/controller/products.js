import { productRepo } from "../repositories/index.js";

//Action: get all product 
const getAllProducts = async (req, res) => {
    try {
        const products = await productRepo.list();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
};
// get product by ID
// const getProductById = async (req, res) => {
//     try {
//         const productId = parseInt(req.params.id.slice(1));
//         console.log(productId)
//         // Tìm sản phẩm trong mảng products dựa trên ID
//         const product = products.find((item) => item.id === productId);

//         if (!product) {
//             // Nếu không tìm thấy sản phẩm, trả về thông báo lỗi
//             res.status(404).json({
//                 message: "Product not found",
//             });
//         } else {
//             // Nếu tìm thấy sản phẩm, trả về thông tin sản phẩm
//             res.status(200).json({
//                 message: "Load product success",
//                 data: product,
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.toString(),
//         });
//     }
// };

// get product by id
const getProductByObjectId = async (req, res) => {
    try {
        res.status(200).json(await productRepo.fetchById(req.params.id));
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

// post: create a new product
const createProduct = async(req,res) => {
    try {
        // get data from request body
        const {name, price, description, category} = req.body;
        const result = await productRepo.create({name, price, description, category});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }
}
export default {
    getAllProducts,
    getProductByObjectId,
    createProduct
}