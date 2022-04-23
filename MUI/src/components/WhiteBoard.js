import React from "react";
import { Typography } from "@mui/material";
const Whiteboard = (props) => {
   return (
      <>
         <Typography variant="h4">{props.active.title}</Typography>
         <Typography variant="p">{props.active.desc}</Typography>
      </>
   );
};

export default Whiteboard;
