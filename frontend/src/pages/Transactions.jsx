import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { transactions, transactionsColumns } from "../data/transactions";
import Layout from "./Layout";

const Transactions = () => {
  return (
   <Layout>
     <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Transactions
      </Typography>
      <Table
        data={transactions}
        fields={transactionsColumns}
        numberOfRows={transactions.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
      />
    </Box>
   </Layout>
  );
};

export default Transactions;
