import mongoose from 'mongoose';

const Produk = mongoose.Schema({
    fname:{
        type:String,
        required:true
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
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

export default mongoose.model("Produk",Produk)