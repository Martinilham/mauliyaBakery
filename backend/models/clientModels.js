import mongoose from "mongoose";

const Client = mongoose.Schema({
    nomorTLP: {
        type:String,
        required:true
    },
    nama:{
        type:String,
        required:true
    },
    alamat:{
        type:String,
        required:true
    }

})

export default mongoose.model("Client",Client)