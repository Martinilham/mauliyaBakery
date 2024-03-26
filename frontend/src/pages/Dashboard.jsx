import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Stats from "../components/home/stats/Stats";
import SalesReportChart from "../components/sales/charts/SalesReportChart";
import {
  salesReportPieChartData,
  salesReportPieChartOptions,
} from "../data/chartData";
import Layout from "./Layout";
import SalesBarChart from "../components/sales/charts/newBarChart";

const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" ,}}>
      <ComponentWrapper>
        <Stats />
      </ComponentWrapper>

      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
          <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                height: { xs: "400px", md: "100%" },
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
              }}
            >
            <SalesBarChart
            width="100%"
            height="100%"
            />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
                p: "10px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sales Report
              </Typography>
              <SalesReportChart
                chartOptions={salesReportPieChartOptions}
                chartData={salesReportPieChartData}
              />
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>

    </Box>
    </Layout>
  );
};

export default Dashboard;
