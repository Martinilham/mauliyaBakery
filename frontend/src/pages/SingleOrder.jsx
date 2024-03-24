import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";

import { Box, Paper } from "@mui/material";

const SingleProduct = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const getorderById = async (id) => {
    try {
      const response = await axios.get(`https://mauliya-bakeryserve.vercel.app/pesanan/${id}`);
      setOrder(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };
  
  useEffect(() => {
    getorderById(id);
  }, [id]);    

  console.log(order)
  if (!order) {
    return (
      <Layout>
        <Box sx={{ pt: "80px", pb: "20px" }}>
          <p>Loading...</p>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
            p: "20px",
          }}
        >
          <div>
            <h1>Order Detail</h1>
            <p>Order ID: {order._id}</p>
            <p>Customer Name: {order.nama}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.namaproduk} - Quantity: {item.jumlah} - Price: {item.harga}
                </li>
              ))}
            </ul>
            <p>Total Amount: {order.totalAmount}</p>
            <p>Status: {order.statusbayar}</p>
          </div>
        </Paper>
      </Box>
    </Layout>
  );
};

export default SingleProduct;
