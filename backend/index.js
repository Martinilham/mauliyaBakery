import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import userRoutes from './routes/userRoutes.js';
import pesananRoutes from './routes/pesananRoutes.js';
import clientroutes from './routes/clientroutes.js';
import reviewroutes from './routes/reviewroutes.js';
import produkRoutes from './routes/produkRoutes.js';
import Midtrans from './database/midtrands.js';
import './database/koneksi.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/payment', Midtrans);
app.use(produkRoutes);
app.use(userRoutes);
app.use(pesananRoutes);
app.use(clientroutes);
app.use(reviewroutes);


app.use('/api/proxy', createProxyMiddleware({
    target: 'https://maulia-bakeryserver.vercel.app',
    changeOrigin: true,
}));

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
