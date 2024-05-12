import Client from "../models/clientModels.js";

import  jwt  from "jsonwebtoken";



const SECRET_KEY = 'super-secret-key'

export const getClient = async (req, res) => {
    try {
        const user = await Client.find()
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getClientbyID = async (req, res) => {
    try {
        const user = await Client.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveClient = async (req, res) => {
    const user = new Client(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateClient = async (req, res) => {
    try {
        const updatedUser = await Client.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteClient = async (req, res) => {
    try {
        const deleteUser = await Client.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


export const loginClient = async (req, res) => {
    try {
        const { nomorTLP,nama } = req.body;
        let user = await Client.findOne({ nomorTLP });

        if (!user) {
            user = new Client({ nomorTLP,nama });
            await user.save();
        }
        const token = jwt.sign({ userId: user._id, userName: user.nama }, SECRET_KEY, { expiresIn: '1hr' });
        
        res.json({ message: 'Login Berhasil', token ,nama, nomorTLP });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
};



