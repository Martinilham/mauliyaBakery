import Barang from "../models/barangModels.js";

export const getBarang = async (req, res) => {
    try {
        const barang = await Barang.find();
        res.json(barang);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getBarangById = async (req, res) => {
    try {
        const barang = await Barang.findById(req.params.id);
        res.json(barang);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveBarang = async (req, res) => {
    const barang = new Barang(req.body);
    try {
        const insertedBarang = await barang.save();
        res.status(201).json(insertedBarang);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateBarang = async (req, res) => {
    try {
        const updatedBarang = await Barang.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedBarang);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteBarang = async (req, res) => {
    try {
        const deletedBarang = await Barang.deleteOne({_id:req.params.id});
        res.status(200).json(deletedBarang);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}