import mongoose from 'mongoose';

const Transaksi = mongoose.Schema({
    idpemesanan:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'pesanans'
    },
    namauser:{
        type:String,
        required: true
    },
    tanggal:{
        type:String,
        required: true
    },
    jumlah:{
        type:Number,
        required: true
    },
    metodepembayaran:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    total:{
        type:Number,
        required: true
    },
});

export default mongoose.model("Transaksi",Transaksi)