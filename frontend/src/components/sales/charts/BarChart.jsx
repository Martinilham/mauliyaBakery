import { Paper, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import {
  dailyVisitsBarChartData,
  dailyVisitsBarChartOptions,
} from "../../../data/chartData";

const BarChart = () => {
  return (
    <Paper
      sx={{
        boxShadow: "none !important",
        borderRadius: "12px",
        padding: "15px",
        height: { xs: "400px", md: "100%" },
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        height: "100%",
        marginTop: "20px"
      }}
    >
      <Typography variant="h5">Daily Visits Insights</Typography>
      <Chart
        options={dailyVisitsBarChartOptions}
        series={dailyVisitsBarChartData}
        type="bar"
        width="100%"
        height="100%"
      />
    </Paper>
  );
};

export default BarChart;
