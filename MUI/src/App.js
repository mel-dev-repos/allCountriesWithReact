import React from "react";
import TabPanel from "./components/TabPanel";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Auth } from "./components/Auth";
const App = () => {
   return (
      <Routes>
         <Route path="/" element={<TabPanel />} />
         <Route path="login" element={<Login />} />
         <Route path="/" element={<Auth/>}>
            <Route path="dashboard" element={<Dashboard />} />
         </Route>
      </Routes>
   );
};

export default App;
