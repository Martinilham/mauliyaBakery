import mongoose from "mongoose";

const Pesanan = mongoose.Schema({
    idpemesan:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    namapemesan: {
        type:String
    },
    items : [
        {
            produk_id: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'produk' 
            },
            namaproduk:{
                type:String,
                required:true,
            },
            harga:{
                type:Number,
                required:true,
            },
            jumlah:{
                type:Number,
                required:true,
            }
        }
    ],
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
        type:String,
        required:true
    },

});

export default mongoose.model("Pesanan",Pesanan)