
import userRoutes from "./routes/userRoutes.js"; 
import pesananRoutes from "./routes/pesananRoutes.js"; 
import clientroutes from "./routes/clientroutes.js"
import reviewroutes from "./routes/reviewroutes.js"
import dotenv from "dotenv";
import express from "express";
const app = express();
import "./database/koneksi.js"; 
import produkRoutes from "./routes/produkRoutes.js";
import cors from "cors";

dotenv.config();

const port = 5000;


app.use(express.json());
app.use(cors())
app.use(produkRoutes);
app.use(userRoutes)
app.use(pesananRoutes)
app.use(clientroutes)
app.use(reviewroutes)

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})