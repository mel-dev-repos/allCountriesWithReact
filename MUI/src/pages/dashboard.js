import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Dashboard = () => {
   const navigate = useNavigate();
   const clickHandler = () => {
      localStorage.removeItem("user")
      navigate("/login");
   }
   return (
      <div>
         <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>
         <div style={{margin:"auto", textAlign:"center"}}>
            <Button onClick={clickHandler} color="secondary" sx={{ m:1 }} variant="outlined">
               Logout
            </Button>
         </div>
      </div>
   );
};

export default Dashboard;
