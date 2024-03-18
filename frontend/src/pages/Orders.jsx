import { Box, Button, Typography ,Paper} from "@mui/material";
import React, { useState ,useEffect} from "react";
import Layout from "./Layout";
import axios from 'axios'

const Orders = () => {
  const [data, setData] = useState([]);


    const getUserData = async () => {
        const res = await axios.get("https://mauliya-bakeryserve.vercel.app/pesanan", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data)
        }

    }
    useEffect(() => {
      getUserData()
  }, [])

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
                    {data.map((pesanan, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'dark' : 'light'}:bg-white hover:bg-gray-200  dark:${index % 2 === 0 ? 'odd' : 'even'}:bg-gray-800 dark:hover:bg-gray-700 `}>
                        
                        <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{pesanan.nama}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{pesanan.jumlah}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{pesanan.alamat}</td>
                        
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

export default Orders;
