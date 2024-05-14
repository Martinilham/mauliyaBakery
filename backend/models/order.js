import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // Status pembayaran
    items: [{ 
      name: String,
      quantity: Number,
      price: Number,
    }],
    // Tambahkan lebih banyak field pesanan jika diperlukan
  });
  
const Order = mongoose.model('Order', orderSchema);

export default Order;