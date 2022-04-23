import React from "react";
import { Tab, Tabs } from "@mui/material";
const Footer = () => {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
   return (
      <div>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
         >
            <Tab label="Backend" />
            <Tab label="WebDesign" />
            <Tab label="frontend" />
            <Tab label="All" />
         </Tabs>
      </div>
   );
};

export default Footer;
