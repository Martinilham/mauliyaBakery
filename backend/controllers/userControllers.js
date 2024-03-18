import User from "../models/UserModels.js";
import Bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";



const SECRET_KEY = 'super-secret-key'

export const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const registUser = async (req, res) => {
    try {
        const { nama, email, statususer, notlpn, password} = req.body
        const enkripsipwd = await Bcrypt.hash(password, 10)
        const userbaru = new User({ nama, email, statususer, notlpn, password: enkripsipwd })
        await userbaru.save()
        res.status(200).json("daftar berhasil");
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const loginUser = async(req,res) => {
    try{
        const { nama, password } = req.body
        const user = await User.findOne({ nama })
        if (!user) {
            return res.status(401).json({ error: 'user tidak ditemukan'})
        }
        const isPasswordValid = await Bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'password  salah' })
        }
        if(user.statususer === 'admin') {
            const token = jwt.sign({ userId: user._id , userName: user.nama,isAdmin:true}, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login Berhasil' ,token,isAdmin:true})
        }
    } catch(error){
        res.status(500).json({ error: 'Login Gagal' })
    }
}


