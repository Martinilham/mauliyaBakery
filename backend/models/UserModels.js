import mongoose from "mongoose";
const User = mongoose.Schema({
    nama:{
        type:String,
        required: true
    },
    namalengkap:{
        type:String,
        
    },
    email: {
        type:String,
        required:true
    },
    alamat:{
        type:String,
        required:true
    },
    statususer:{
        type:String,
        required:true
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

export default mongoose.model("User",User)