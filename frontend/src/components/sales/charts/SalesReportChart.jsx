import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesReportChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://mauliya-bakeryserve.vercel.app/pesanan');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Proses data untuk menghasilkan chartData dan chartOptions dari data API
      const chartData = []; // Bentuk series data dari API
      const chartOptions = {}; // Bentuk opsi chart dari API

      // Lakukan proses transformasi data API ke dalam format yang sesuai dengan chartData dan chartOptions

      this.setState({
        chartData: chartData,
        chartOptions: chartOptions,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="pie"
        width="100%"
        height="100%"
      />
    );
  }
}

export default SalesReportChart;
