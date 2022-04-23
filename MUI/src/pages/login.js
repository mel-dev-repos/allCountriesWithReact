import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const [values, setValues] = React.useState({
      email: "",
      password: "",
      showPassword: false,
   });

   const navigate = useNavigate()

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      });
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleSubmit = () => {
      localStorage.clear()
      console.log(values);
      if (values.email !== "" && values.password !== "") {
         localStorage.setItem("user", JSON.stringify(values));
      }
      navigate("/dashboard")
   };
   return (
      <Box
         className="login"
         sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "cerner",
            alignContent: "center",
         }}
      >
         <Typography variant="h2" sx={{ textAlign: "center", m: 4 }}>
            Login
         </Typography>
         <TextField
            color="secondary"
            value={values.email}
            onChange={handleChange("email")}
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
         />
         <FormControl
            color="secondary"
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
         >
            <InputLabel htmlFor="outlined-adornment-password">
               Password
            </InputLabel>
            <OutlinedInput
               id="outlined-adornment-password"
               type={values.showPassword ? "text" : "password"}
               value={values.password}
               onChange={handleChange("password")}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {values.showPassword ? (
                           <VisibilityOff />
                        ) : (
                           <Visibility />
                        )}
                     </IconButton>
                  </InputAdornment>
               }
               label="Password"
            />
         </FormControl>
         <Button
            onClick={handleSubmit}
            color="secondary"
            sx={{ m: 1 }}
            variant="outlined"
         >
            Login
         </Button>
      </Box>
   );
};

export default Login;
