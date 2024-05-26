
import { ObjectId } from "mongodb";
import mongoose from "mongoose";



const itemSchema = mongoose.Schema({
    produk_id :  { type: ObjectId, required: true,ref: 'Produk'  },
    namaproduk: { type: String, required: true },
    kategori: { type: String, required: true },
    harga: { type: Number, required: true },
    diskon: { type: Number,required: true},
    jumlah: { type: Number, required: true }
});

const Pesanan = mongoose.Schema({
    idpemesan:{
        type: String 
    },
    orderId:{
        type: String 
    },
    namapemesan: {
        type:String
    },
    items : [itemSchema],
    alamat:{
        type:String,
        required:true
    },
    notlpn: {
        type:String,
        required:true
    },
    total: {
        type:Number,
        required:true
    },
    statusbayar: {
        type:String,
        required:true
    },
    statusditerima: {
        type:String,
        required:true
    },
    tglorder: {
        type:String
    },

});

export default mongoose.model("Pesanan",Pesanan)
