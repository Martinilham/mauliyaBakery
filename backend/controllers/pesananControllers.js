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
    const { idpemesan, namapemesan, items:[{ produk_id, namaproduk, kategori, harga, jumlah }], alamat, notlpn, total, statusbayar, statusditerima } = req.body;
    try {
        const waktuWIB = moment().tz('Asia/Jakarta');
        const formattedDateTime = waktuWIB.format('DD MMMM YYYY HH:mm:ss', 'id');
        const pesanan = new Pesanan({
            idpemesan: idpemesan,
            namapemesan: namapemesan,
            items: [
                {
                    produk_id: produk_id,
                    namaproduk: namaproduk,
                    harga: harga,
                    jumlah: jumlah
                }
            ],
            alamat: alamat,
            notlpn: notlpn,
            total: total,
            statusbayar: statusbayar,
            statusditerima: statusditerima,
            tglorder: formattedDateTime
        });

        const finaldata = await pesanan.save();

        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        console.error('Error saving pesanan:', error); 
        res.status(500).json({ status: 500, error: 'Internal server error' });
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