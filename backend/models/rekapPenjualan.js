
const Produk = mongoose.Schema({
    produk_id:{
        type:String,
        required: true
    },
    namaproduk:{
        type:String,
        required: true
    },
    penjualanharian:{
        type:String,
        required: true
    },
    totalharga:{
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