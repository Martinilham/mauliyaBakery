import mongoose from "mongoose";

const Review = mongoose.Schema({
    nama: {
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },

})

export default mongoose.model("Review",Review)