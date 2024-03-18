import { Box ,Paper} from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { customersAll, customersColumns } from "../data/customers"; 
import Layout from "./Layout";

const Customers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    customersAll()
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        console.error("Error fetching customers data:", error);
      });
  }, []);

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
            padding: "16px",
          }}
        >
          <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
                      <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      user.statususer === "client" && (
                        <tr key={index} className={`${index % 2 === 0 ? 'dark' : 'light'}:bg-white hover:bg-gray-200  dark:${index % 2 === 0 ? 'odd' : 'even'}:bg-gray-800 dark:hover:bg-gray-700 `}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{user.nama}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{user.alamat}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                        </td>
                      </tr>
                      )
                    ))}
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

export default Customers;

