import mongoose from 'mongoose';

const Barang = mongoose.Schema({
    namabarang:{
        type:String,
        required: true
    },
    deskripsi:{
        type:String,
        required: true
    },
    kategori:{
        type:Number,
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
});

export default mongoose.model("Barang",Barang)