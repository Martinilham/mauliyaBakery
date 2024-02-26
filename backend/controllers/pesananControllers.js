import Pesanan from "../models/pesananModels.js";

export const getPesanan = async (req, res) => {
    try {
        const pesanan = await Pesanan.find().populate("nama.nama");
        res.json(pesanan);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getpesananById = async (req, res) => {
    try {
        const pesanan = await Pesanan.findById(req.params.id);
        res.json(pesanan);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePesanan = async (req, res) => {
    const pesanan = new Pesanan(req.body);
    try {
        const buatPesanan = await pesanan.save();
        res.status(201).json(buatPesanan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePesanan = async (req, res) => {
    try {
        const updatePesanan = await Pesanan.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatePesanan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePesanan = async (req, res) => {
    try {
        const deletePesanan = await Pesanan.deleteOne({_id:req.params.id});
        res.status(200).json(deletePesanan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}