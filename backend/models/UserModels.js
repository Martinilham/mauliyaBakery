const User = mongoose.Schema({
    nama:{
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    alamat:{
        type:String,
    },
    notlpn: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },

});

export default mongoose.model("Barang",Barang)