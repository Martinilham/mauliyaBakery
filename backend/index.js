// import userRoutes from "./routes/userRoutes.js"
// import pesananRoutes from "./routes/pesananRoutes.js"
// require("dotenv").config();
// import express from "express";
// const app = express();
// require("./db/conn");
// import produkRoutes from "./routes/produkRoutes.js"
// import cors from "cors"

import userRoutes from "./routes/userRoutes.js"; // Change file extension to .mjs
import pesananRoutes from "./routes/pesananRoutes.js"; // Change file extension to .mjs
import dotenv from "dotenv";
import express from "express";
const app = express();
import "./database/koneksi.js"; // Change file extension to .mjs
import produkRoutes from "./routes/produkRoutes.js"; // Change file extension to .mjs
import cors from "cors";

dotenv.config();

const port = 5000;


app.use(express.json());
app.use(cors())
app.use(produkRoutes);
app.use(userRoutes)
app.use(pesananRoutes)
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/uploads",express.static("./uploads"));


app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})