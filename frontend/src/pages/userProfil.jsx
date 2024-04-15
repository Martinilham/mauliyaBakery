import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import React from 'react'
import axios from "axios";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import Layout from "./Layout";


function UserProfil() {
    const [userData, setUserData] = useState([]);
    const [dataAdmin,setDataAdmin] = useState([])
    

    useEffect(() => {
        const tokenNow = localStorage.getItem("token");
        if (tokenNow) {
            const decodedToken = jwt_decode(tokenNow);
            console.log(decodedToken);
            setDataAdmin(decodedToken)
        } else {
            console.log("Token tidak tersedia. Silakan masuk untuk melihat profil.");
        }
    }, []);
    console.log(dataAdmin.userName)
    return (
       <Layout>
         <Box sx={{ pt: "80px", pb: "20px" }}>
                    <Typography variant="h4">Nama: {dataAdmin.userName}</Typography>
        </Box>
       </Layout>
       
    );
}

export default UserProfil;
