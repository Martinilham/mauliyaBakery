import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  if (!data) {
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
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Detail</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {record.map((order, index) => (
                          (order.statusditerima !== "terkirim" || order.statusbayar !== "di bayar") && (
                            <tr
                              key={index}
                              className={`${index % 2 === 0 ? "dark" : "light"}:bg-white hover:bg-gray-200  dark:${
                                index % 2 === 0 ? "odd" : "even"
                              }:bg-gray-800 `}
                            >
                              <td className="px-1 py-4 whitespace-nowrap text-sm ">{order.namapemesan}</td>
                              <td className="px-1 py-4 whitespace-nowrap text-sm ">{order.alamat}</td>
                              <td className="px-1 py-4 whitespace-nowrap text-sm ">{order.items.length}</td>
                              {order.statusditerima === "belum diterima" && (
                                <td className="px-1 py-4 whitespace-nowrap text-sm text-red-800">{order.statusditerima}</td>
                              )}
                              {order.statusbayar === "pending" && (
                                <td className="px-1 py-4 whitespace-nowrap text-sm text-red-800">{order.statusbayar}</td>
                              )}
                              {order.statusditerima === "terkirim" && (
                                <td className="px-1 py-4 whitespace-nowrap text-sm text-green-500">{order.statusditerima}</td>
                              )}
                              {order.statusbayar === "di bayar" && (
                                <td className="px-1 py-4 whitespace-nowrap text-sm text-green-500">{order.statusbayar}</td>
                              )}
                              <td className="px-1 py-4 whitespace-nowrap text-sm ">
                              {new Date(order.tglorder).toLocaleDateString("id-ID", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                                </td>
                              <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  onClick={() => navigate(`/orders/${order._id}`)}
                                >
                                  Detail
                                </button>
                              </td>
                                <td>
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  onClick={() => navigate(`/orders/${order._id}`)}
                                >
                                  Delete
                                </button>
                                </td>
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
