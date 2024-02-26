import Transaksi from "../models/transaksiModels.js";

export const getTransaksi = async (req, res) => {
    try {
        const transaksi = await Transaksi.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTransaksiById = async (req, res) => {
    try {
        const transaksi = await Transaksi.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTransaksi = async (req, res) => {
    const transaksi = new Transaksi(req.body);
    try {
        const insertedTransaksi = await transaksi.save();
        res.status(201).json(insertedTransaksi);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTransaksi = async (req, res) => {
    try {
        const updateTransaksi = await Transaksi.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateTransaksi);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTransaksi = async (req, res) => {
    try {
        const deleteTransaksi = await Transaksi.deleteOne({_id:req.params.id});
        res.status(200).json(deleteTransaksi);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}