import  express  from "express";
const router = new express.Router();
import multer from "multer"
import Produk from "../models/produkModels.js"
import moment from "moment"
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
  
router.put("/getdata/:id", upload.single("photo"), async (req, res) => {
    try {
      let produk = await Produk.findById(req.params.id);
        const imgurl = produk.imgpath;
        const urlArray = imgurl.split("/")
        const image = urlArray[urlArray.length-1];
        const imageName =image.split(".")[0];
      await cloudinary.uploader.destroy(imageName);
  
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }

      const data = {
        name: req.body.fname || produk.fname,
        deskripsi: req.body.deskripsi || produk.deskripsi,
        kategori: req.body.kategori || produk.kategori,
        jumlah: req.body.jumlah || produk.jumlah,
        harga: req.body.harga || produk.harga,
        imgpath: result?.secure_url || produk.imgpath,
      };

      produk = await Produk.findByIdAndUpdate(req.params.id, data, { new: true });
      res.json(produk);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

  


router.delete("/getdata/:id", async (req, res) => {
    try {
        
      let product = await Produk.findById(req.params.id);
      const imgurl = product.imgpath;
      const urlArray = imgurl.split("/")
    const image = urlArray[urlArray.length-1];
    const imageName =image.split(".")[0]

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
  

      await cloudinary.uploader.destroy(imageName);

      await product.deleteOne();
  
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  

router.put('/kurangi-stok', async (req, res) => {
  const { items } = req.body;

  try {
    for (const item of items) {
      const product = await Produk.findById(item.produk_id);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.produk_id}` });
      }

      if (product.jumlah < item.jumlah) {
        return res.status(400).json({ message: `Not enough stock for product: ${product.name}` });
      }

      product.jumlah -= item.jumlah;
      await product.save();
    }

    res.status(200).json({ message: 'Stock reduced successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});  

export default router
