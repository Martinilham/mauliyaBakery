import Pesanan from "../models/pesananModels.js";
import moment from "moment-timezone";
export const getPesanan = async (req, res) => {
    try {
        const pesanan = await Pesanan.find();
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
    const { idpemesan, namapemesan, items, alamat, notlpn, total, statusbayar, statusditerima, tglorder } = req.body;

    try {
        
        const pesanan = new Pesanan({
            idpemesan: idpemesan,
            namapemesan: namapemesan,
            items: items,  
            alamat: alamat,
            notlpn: notlpn,
            total: total,
            statusbayar: statusbayar,
            statusditerima: statusditerima,
            tglorder: tglorder
        });

        const finaldata = await pesanan.save();

        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        console.error('Error saving pesanan:', error);
        res.status(500).json({ status: 500, error: 'Internal server error' });
    }
};

export const updatePembayaran = async (req, res) => {
    const { statusbayar } = req.body;
    try {
        let produk = await Pesanan.findById(req.params.id);
        if (!produk) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        produk.statusbayar = statusbayar;
        await produk.save();

        res.json(produk);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export const updateDiterima = async (req, res) => {
    const { statusditerima } = req.body;
    try {
        let produk = await Pesanan.findById(req.params.id);
        if (!produk) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        produk.statusditerima = statusditerima;
        await produk.save();

        res.json(produk);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


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
