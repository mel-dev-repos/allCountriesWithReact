import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserContext = React.createContext()

const userAuth = () => {
  const userLoggedIn = localStorage.getItem("user")
  console.log(userLoggedIn);
  if(userLoggedIn){
    return true
  }else {
    return false
  }
}
export const Auth = () => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user)
  }
  
  const logout = (user) => {
    setUser(null)
  }
  const logedIn = userAuth()

  return (
    logedIn ? <Outlet/> :<Navigate to="/login"/>
  );
}

