// midtransConfig.js

import express, { response } from "express"
import Midtrans from "midtrans-client";

const router = express.Router();

router.post("/pembayaran-online",(req,res) =>{
  try {
    const snap = new Midtrans.Snap({
      isProduction:false,
      serverKey:"SB-Mid-client-cAFD0sSoOSoeyfA3",
      clientKey: "SB-Mid-server-CGuxpu65kq5i_gfxcZAmqQur"
    })

    const parameter = {
      "transaction_details": {
        "order_id": req.body.orderId,
        "gross_amount": req.body.total
      }
    }

    snap.createtransaction(parameter).then((transaction)=>{
      const dataPayment = {
        response:json.stringify(transaction)
      }
      const token = transaction.token
      res.status(200).json({
        massage:"berhasil",
        dataPayment,
        token:token
      })
    })


  } catch (error) {
    console.log(error)
  }
})

export default router