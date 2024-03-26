import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SalesBarChart() {
  const [salesData, setSalesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Jumlah data per halaman
  const totalPages = Math.ceil(salesData.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mauliya-bakeryserve.vercel.app/pesanan');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Proses data untuk menghitung total penjualan per kategori (Roti Kering dan Roti Basah) per bulan
        const monthlySales = {};
        data.forEach(order => {
          const yearMonth = order.tglorder.split('-').slice(0, 2).join('-'); // Ambil tahun dan bulan dari tanggal order
          if (!monthlySales[yearMonth]) {
            monthlySales[yearMonth] = { "Roti Kering": 0, "Roti Basah": 0 };
          }
          // Tambahkan total harga dari setiap item pesanan ke total penjualan kategori yang sesuai
          order.items.forEach(item => {
            if (item.kategori === "Kue Kering") {
              monthlySales[yearMonth]["Roti Kering"] += item.harga * item.jumlah;
            } else if (item.kategori === "Kue Basah") {
              monthlySales[yearMonth]["Roti Basah"] += item.harga * item.jumlah;
            }
          });
        });

        // Ubah data ke dalam format yang sesuai dengan BarChart
        const formattedData = Object.keys(monthlySales)
          .map(yearMonth => ({
            yearMonth,
            "Roti Kering": monthlySales[yearMonth]["Roti Kering"],
            "Roti Basah": monthlySales[yearMonth]["Roti Basah"],
          }));

        setSalesData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menampilkan data sesuai halaman yang dipilih
  const displayData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return salesData.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={displayData()}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="yearMonth" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Roti Kering" fill="#8884d8" />
            <Bar dataKey="Roti Basah" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <button onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)}>Previous</button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button onClick={() => setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default SalesBarChart;
