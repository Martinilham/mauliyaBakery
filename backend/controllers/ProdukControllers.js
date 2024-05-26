import Produk from "../models/produkModels.js";

  export const saveProduk = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
     
  
 
      const barang = new Produk({
        namaproduk: req.body.namaproduk,
        deskripsi: req.body.deskripsi,
        kategori: req.body.kategori,
        jumlah: req.body.jumlah,
        harga: req.body.harga,
        discount: req.body.discount,
        gambar: req.file.path,
      });
  
      try {
        const insertedBarang = await barang.save();
        res.status(201).json(insertedBarang);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
  };


export const getProduk = async (req, res) => {
    try {
        const barang = await Produk.find();
        res.json(barang);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProdukById = async (req, res) => {
    try {
        const barang = await Produk.findById(req.params.id);
        res.json(barang);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const updateProduk = async (req, res) => {
    try {
        const updatedBarang = await Produk.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedBarang);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProduk = async (req, res) => {
    try {
        const deletedBarang = await Produk.deleteOne({_id:req.params.id});
        res.status(200).json(deletedBarang);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}