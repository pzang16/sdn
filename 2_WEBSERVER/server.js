// import express module
import express, { json } from "express";
import * as dotenv from 'dotenv';
import {productRouter} from "./routers/index.js";
import connectDB from "./database.js";
//Thực thi cấu hình ứng dụng sử dụng file .env
dotenv.config();
// Tạo đối tượng app để khời tạo web container
const app = express();

// khai báo port cho web server
const port = process.env.PORT || 8080;

//Bổ sung 1 middleware để kiểm soát loại dữ liệu cần làm việc
app.use(json());


// Cấu hình hoạt động routing (định tuyển) các request  gửi tới web server
app.get('/', (req, res) => {
    const result = { "message": "Hello World" }
    res.send(result);
})

app.use('/products', productRouter);

app.listen(port, async () => {
    connectDB();
    console.log(`Server is running on: http://localhost:${port}`);
});

