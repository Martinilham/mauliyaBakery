import { Box,Paper} from "@mui/material";
import React, { useState ,useEffect} from "react";
import Layout from "./Layout";
import axios from "axios";
import PopUp from "./PopUp";
import { useNavigate,useParams } from 'react-router-dom'


function Edit() {

    const [produk, setproduk] = useState("");
    const [deskripsi, setdeskripsi] = useState("");
    const [kategori, setkategori] = useState("");
    const [jumlah, setjumlah] = useState(0);
    const [harga, setharga] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [gambar, setGambar] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const getUserById = async (id) => {
        const response = await axios.get(`http://localhost:5000/getdata/${id}`);
        setproduk(response.data.fname)
        setkategori(response.data.kategori)
        setdeskripsi(response.data.deskripsi)
        setjumlah(response.data.jumlah)
        setharga(response.data.harga)
        setdiscount(response.data.discount)
      };
      
    useEffect(() => {
      getUserById(id);
    }, [id]);    

    const updateBarang = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:5000/getdata/${id}`, {
            produk,
            kategori,
            deskripsi,
            jumlah,
            harga,
            discount
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };

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
                    <div class="min-h-screen p-6  flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
              <div>
                <h2 class="font-semibold text-xl ">Tambahkan Barang Baru</h2>
                <p class="mb-6">Form Pengisian Barang Baru</p>
                <form onSubmit={updateBarang}>
                  <div class=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div class="">
                        <p class="font-medium text-lg">Data Barang</p>
                        <p>Isikan Pada kolom Yang Tersedia</p>
                      </div>

                      <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div class="md:col-span-5">
                            <label for="full_name">Nama Kue</label>
                            <input
                              type="text"
                              name="full_name"
                              id="full_name"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value={produk}
                              onChange={(e) => setproduk(e.target.value)}
                            />
                          </div>

                          <div class="md:col-span-5">
                            <label for="deskripsi">Deskripsi</label>
                            <input
                              type="text"
                              name="deskripsi"
                              id="deskripsi"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value={deskripsi}
                              onChange={(e) => setdeskripsi(e.target.value)}
                            />
                          </div>

                          <div class="md:col-span-3">
                            <label for="jenis_kue">Kategory</label>
                            <select
                              name="jenis_kue"
                              id="jenis_kue"
                              placeholder="Pilih Kategori"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value={kategori}
                              onChange={(e) => setkategori(e.target.value)}
                            >
                              <option value="" disabled defaultValue>
                                pilih kategori
                              </option>
                              <option value="Kue Kering">Kue Kering</option>
                              <option value="Kue Basah">Kue Basah</option>
                            </select>
                          </div>

                          <div class="md:col-span-2">
                            <label for="jumlah">Jumlah</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="jumlah"
                                id="jumlah"
                                placeholder="masukan jumlah"
                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                value={jumlah}
                                onChange={(e) => setjumlah(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="md:col-span-2">
                            <label for="harga">Harga</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="harga"
                                id="harga"
                                placeholder="Harga"
                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                value={harga}
                                onChange={(e) => setharga(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="md:col-span-2">
                            <label for="diskon">Discount</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="diskon"
                                id="diskon"
                                placeholder="Harga"
                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                value={discount}
                                onChange={(e) => setdiscount(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="md:col-span-2">
                            <div class="mx-auto max-w-xs">
                              <label
                                for="gambar"
                                class="mb-1 block text-sm font-small text-gray-700"
                              >
                                Upload file
                              </label>
                              {/* <input
                                id="gambar"
                                type="file"
                                class="mt-2 block w-full text-sm rounded-md border-0 bg-teal-500 py-2 px-4 font-semibold text-white hover:bg-teal-700 focus:outline-none"
                                onChange={setingfile}
                              /> */}
                            </div>
                          </div>

                          <div class="md:col-span-5 text-right">
                            <div class="inline-flex items-end">
                              <button
                                type="submit"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </Paper>
        </Box>
    </Layout>
  )
}
export default Edit;
