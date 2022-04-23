import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modaladditem from "./ModalAddItem";
import { Link } from "react-router-dom";

export default function MyAppBar({newItem,setNewItem}) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar sx={{pt:3}}>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" component="div" sx={{ m:"auto", textAlign:"center"}}>
                  my skills within
                  <Typography variant="h3" component="div" sx={{ ml:"auto" }} >
                     Material UI
                  </Typography>
               </Typography>
               <Link  style={{textDecoration: "none"}}  to="dashboard">
                  {" "}
                  <Button sx={{ ml: "auto", color: "white" }} variant="text">
                     Dashboard
                  </Button>
               </Link>
               <Link  style={{textDecoration: "none"}}  to="login">
                  <Button sx={{ ml: "auto", color: "white" }} variant="text">
                     login
                  </Button>
               </Link>
               <Modaladditem newItem={newItem} setNewItem={setNewItem}/>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
