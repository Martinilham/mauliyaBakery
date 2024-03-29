import  express  from "express";
const router = new express.Router();
import multer from "multer"
import Produk from "../models/produkModels.js"
import moment from "moment"
import fs from "fs"
import cloudinary from '../cloudinary.js'


const imgconfig = multer.diskStorage({
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allow"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})


router.post("/register",upload.single("photo"),async(req,res)=>{
    

    const {fname,deskripsi,kategori,jumlah,harga,discount} = req.body;

    
    const upload = await cloudinary.uploader.upload(req.file.path);
    

    try {

        const date = moment(new Date()).format("YYYY-MM-DD");

        const produkdata = new Produk({
            fname:fname,
            deskripsi:deskripsi,
            kategori:kategori,
            jumlah:jumlah,
            harga:harga,
            discount:discount,
            imgpath:upload.secure_url,
            date:date
        });

        const finaldata = await produkdata.save();

        res.status(201).json({status:201,finaldata});

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});



router.get("/getdata",async(req,res)=>{
    try {
        const getBarang = await Produk.find();

        res.status(201).json({status:201,getBarang})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

router.get("/getdata/:id",async(req,res)=>{
    try {
        const getBarangId = await Produk.findById(req.params.id);

        res.status(201).json({status:201,getBarangId})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});
  
  // Route for updating product data
  router.patch("/getdata/:id",async(req,res)=>{
    try {
        const updatedBarang = await Produk.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedBarang);
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

router.delete("/getdata/:id",async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await Produk.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

})


export default router
