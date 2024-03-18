import { Box,Paper} from "@mui/material";
import React, { useState ,useEffect} from "react";
import Layout from "./Layout";
import axios from "axios";
import PopUp from "./PopUp";
import { useNavigate } from 'react-router-dom'



const Products = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  
  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/getdata", {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.data.status === 401 || !res.data) {
        console.log("errror")
    } else {
        setData(res.data.getBarang)
    }

  }

  
  useEffect(() => {
      getUserData()
  }, [])

  const deleteProduk = async(id)=>{
    setIsOpen(false)
    await axios.delete(`http://localhost:5000/getdata/${id}`)
    getUserData()
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
                    {data.map((barang, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'dark' : 'light'}:bg-white hover:bg-gray-200  dark:${index % 2 === 0 ? 'odd' : 'even'}:bg-gray-800 dark:hover:bg-gray-700 `}>
                        <td className="px-3 py-4  text-sm font-medium ">
                            <img src={require(`../uploads/${barang.imgpath}`)} alt={barang.namaproduk} style={{ maxWidth: "80px" }}></img>
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <button 
                          type="button" 
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          onClick={()=> navigate(`/edit/${barang._id}`)}
                          >Edit
                          </button>
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <button 
                          type="button" 
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          onClick={openDialog}
                          >Delete
                          </button>
                          <PopUp isOpen={isOpen} onClose={closeDialog}>
                            <h2 className="text-xl font-bold mb-4">Menghapus Produk</h2>
                            <img className="m-auto" src={require(`../uploads/${barang.imgpath}`)} alt={barang.namaproduk} style={{ maxWidth: "100px" }}></img>
                            <p className="mt-4 text-center">{barang.fname}</p>
                            <button 
                              type="button" 
                              className="m-auto text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-red-500 bg-red-500 text-white hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              onClick={()=> deleteProduk(barang._id)}
                              >Delete
                              </button>
                          </PopUp>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{barang.fname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{barang.deskripsi}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{barang.kategori}</td>
                        
                      </tr>
                      )
                    )}
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
