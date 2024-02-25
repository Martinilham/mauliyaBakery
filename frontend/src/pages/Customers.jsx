import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { customers, customersColumns } from "../data/customers";
import Layout from "./Layout";

const Customers = () => {
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Customers
      </Typography>
      <Table
        data={customers}
        fields={customersColumns}
        numberOfRows={customers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview
        routeLink="customers"
      />
    </Box>
    </Layout>
  );
};

export default Customers;
