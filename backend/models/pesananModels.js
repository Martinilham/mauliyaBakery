import mongoose from "mongoose";

const Pesanan = mongoose.Schema({
    idpemesan:{
        type:String,
        required: true
    },
    namapemesan: {
        type:String,
        required:true
    },
    items : [
        {
            namabarang:{
                type:Number,
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
    tglorder: {
        type:String,
        required:true
    },

});

export default mongoose.model("User",User)