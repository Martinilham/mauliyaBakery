
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
import Order from "./models/order.js";
import Midtrans from "./database/midtrands.js";

dotenv.config();

const port = 5000;


app.use(express.json());
app.use(cors())
app.use(Midtrans);
app.use(produkRoutes);
app.use(userRoutes)
app.use(pesananRoutes)
app.use(clientroutes)
app.use(reviewroutes)

app.post('https://app.sandbox.midtrans.com/snap/v1/transactions', async (req, res) => {
    try {
      const { orderId, totalAmount, items } = req.body;
  
      const parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount: totalAmount
        }
      };
  
      const paymentResponse = await snap.createTransaction(parameter);
  
      res.json({ redirect_url: paymentResponse.redirect_url });
    } catch (error) {
      console.error('Error initiating payment:', error);
      res.status(500).json({ message: 'Error initiating payment' });
    }
  });
  
  // Route untuk menangani callback dari Midtrans
  app.post('/callback', async (req, res) => {
    try {
      const orderId = req.body.order_id;
      const transactionStatus = req.body.transaction_status;
  
      if (transactionStatus === 'capture') {
        // Update status pembayaran ke 'paid'
        await Order.findOneAndUpdate({ orderId }, { status: 'paid' });
  
        res.status(200).send('Payment status updated.');
      } else {
        res.status(400).send('Invalid transaction status.');
      }
    } catch (error) {
      console.error('Error handling payment callback:', error);
      res.status(500).send('Error handling payment callback.');
    }
  });


app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})