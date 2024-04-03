import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function Edit() {
    // const [produk, setProduk] = useState("");
    // const [deskripsi, setDeskripsi] = useState("");
    // const [kategori, setKategori] = useState("");
    // const [jumlah, setJumlah] = useState(0);
    // const [harga, setHarga] = useState(0);
    // const [discount, setDiscount] = useState(0);
    // const [gambar, setGambar] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState({
      name: "",
      deskripsi: "",
      kategori: "",
      jumlah: "",
      harga: "",
      imgpath: "",
    });

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getdata/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleChange = (name) => (e) => {
      const value = name === "image" ? e.target.files[0] : e.target.value;
      setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("fname", data.name);
        formData.append("deskripsi", data.deskripsi);
        formData.append("kategori", data.kategori);
        formData.append("jumlah", data.jumlah);
        formData.append("harga", data.harga);
        formData.append("discount", data.discount);
        formData.append("photo", data.imgpath);

        const res = await axios.put(`http://localhost:5000/getdata/${id}`, formData);
        if (res.status === 200) {
          setData({
            name: "",
            deskripsi: "",
            kategori: "",
            jumlah: "",
            harga: "",
            diskon:"",
            imgpath: ""
          });
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };

    return (
      <div style={{ maxWidth: 500, margin: "auto" }}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="deskripsi"
            value={data.deskripsi}
            onChange={handleChange("deskripsi")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="kategori"
            value={data.kategori}
            onChange={handleChange("kategori")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="jumlah"
            value={data.jumlah}
            onChange={handleChange("jumlah")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="harga"
            value={data.harga}
            onChange={handleChange("harga")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="discount"
            value={data.discount}
            onChange={handleChange("discount")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            name="image"
            onChange={handleChange("imgpath")}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    );
}

export default Edit;
