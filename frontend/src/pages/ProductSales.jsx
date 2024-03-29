import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import DonutChart from "../components/DonutChart";
import Table from "../components/Table";
import {
  productSalesDognutChartData,
  productSalesDognutChartOptions,
} from "../data/chartData";
import Layout from "./Layout";

import { productSales, productSalesColumns } from "../data/productSales";
const ProductSales = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Stok Barang
      </Typography>
      <ComponentWrapper>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
            height: "100%",
            padding: "16px",
          }}
        >
          <Typography variant="h5">Stok Produk Per Kategori</Typography>
          <DonutChart
            chartOptions={productSalesDognutChartOptions}
            chartData={productSalesDognutChartData}
          />
        </Paper>
      </ComponentWrapper>
      <ComponentWrapper>
        <Table
          data={productSales}
          fields={productSalesColumns}
          numberOfRows={productSales.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
        />
      </ComponentWrapper>
    </Box>
    </Layout>
  );
};

export default ProductSales;
