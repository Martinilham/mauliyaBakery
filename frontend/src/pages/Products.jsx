import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import Search from "../components/common/search";

const Products = () => {
  const [data, setData] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [record,setRecords] = useState([])
  const filter = (e)=>{
        setRecords(data.filter(f=>f.fname.toLowerCase().includes(e.target.value)))
  };
  const deleteProduk = async (id) => {
    setIsOpen(false);
    try {
      await axios.delete(`http://localhost:5000/getdata/${id}`);
      getUserData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const openDialog = (id) => {
    setDeleteItemId(id);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setDeleteItemId(null);
    setIsOpen(false);
  };

  const getUserData = async () => {
    try {
      const res = await axios.get("https://mauliya-bakeryserve.vercel.app/getdata", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data.getBarang);
        setRecords(res.data.getBarang)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  

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
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase">Gambar</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Edit</th>
                        <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Hapus</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Nama</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Deskripsi</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Kategori</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.map((barang, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'dark' : 'light'}:bg-white hover:bg-gray-200  dark:${index % 2 === 0 ? 'odd' : 'even'}:bg-gray-800 dark:hover:bg-gray-700 `}>
                          <td className="px-3 py-4  text-sm font-medium ">
                            <img src={barang.imgpath} alt={barang.namaproduk} style={{ maxWidth: "80px" }} />
                          </td>
                          <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              onClick={() => navigate(`/edit/${barang._id}`)}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              onClick={() => openDialog(barang._id)}
                            >
                              Delete
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{barang.fname}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">{barang.deskripsi}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">{barang.kategori}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
      <PopUp isOpen={isOpen} onClose={closeDialog}>
        {deleteItemId && (
          <>
            <h2 className="text-xl font-bold mb-4">Menghapus Produk</h2>
            {data.map((barang) => barang._id === deleteItemId && (
              <div key={barang._id}>
                <img className="m-auto" src={barang.imgpath} alt={barang.namaproduk} style={{ maxWidth: "100px" }} />
                <p className="mt-4 text-center">{barang.fname}</p>
                <button
                  type="button"
                  className="inline-flex items-center text-center text-sm font-semibold rounded-md border border-red-500 bg-red-500 text-white hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={() => deleteProduk(barang._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </PopUp>
    </Layout>
  );
};

export default Products;
