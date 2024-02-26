import mongoose from 'mongoose';

const Produk = mongoose.Schema({
    namaproduk:{
        type:String,
        required: true
    },
    deskripsi:{
        type:String,
        required: true
    },
    kategori:{
        type:String,
        required: true
    },
    jumlah:{
        type:Number,
        required: true
    },
    harga:{
        type:Number,
        required: true
    },
    discount:{
        type:Number,
        required: true
    },
    gambar:{
        type:String,
        required: true
    },
});

export default mongoose.model("Produk",Produk)