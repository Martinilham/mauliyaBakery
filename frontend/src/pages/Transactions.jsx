import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import Search from "../components/common/search";

const Products = () => {
  const [data, setData] = useState([]);

  const [record,setRecords] = useState([])
  const filter = (e)=>{
        setRecords(data.filter(f=>f.nama.toLowerCase().includes(e.target.value)))
  };

  const getUserData = async () => {
    try {
      const res = await axios.get("https://mauliya-bakeryserve.vercel.app/pesanan", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data);
        setRecords(res.data)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

    console.log(record)
  

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
      <div>
          <div class='max-w-md mx-auto mb-4'>
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>

          <input
          class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Cari Disini.." 
          onChange={filter}/> 
        </div>
      </div>
    </div>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
            height: "100%",
            padding: "11px",
          }}
        >
          
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto md:overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Nama</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Alamat</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Jumlah</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status Barang</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status Bayar</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.map((barang, index) => (
                        barang.statusditerima == "terkirim" && barang.statusbayar == "dibayar" &&(
                          <tr key={index} className={`${index % 2 === 0 ? 'dark' : 'light'}:bg-white hover:bg-gray-200  dark:${index % 2 === 0 ? 'odd' : 'even'}:bg-gray-800 dark:hover:bg-gray-700 `}>
                          <td className="px-1 py-4 whitespace-nowrap text-sm ">{barang.nama}</td>
                          <td className="px-1 py-4 whitespace-nowrap text-sm ">{barang.alamat}</td>
                          <td className="px-1 py-4 whitespace-nowrap text-sm ">{barang.items.length}</td>
                            {barang.statusditerima == "belum diterima" && (
                              <td className="px-1 py-4 whitespace-nowrap text-sm text-red-800">{barang.statusditerima}</td>
                            )}
                            {barang.statusditerima == "terkirim" && (
                              <td className="px-1 py-4 whitespace-nowrap text-sm text-green-600">{barang.statusditerima}</td>
                            )}
                            {barang.statusbayar == "dibayar" && (
                              <td className="px-1 py-4 whitespace-nowrap text-sm text-green-600">{barang.statusbayar}</td>
                            )}
                          {barang.statusbayar =="pending" && (
                              <td className="px-1 py-4 whitespace-nowrap text-sm text-red-800">{barang.statusbayar}</td>
                            )}
                          <td className="px-1 py-4 whitespace-nowrap text-sm ">{barang.tglorder}</td>
                        </tr>
                        )
                      ))}
                        
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
     
    </Layout>
  );
};

export default Products;
