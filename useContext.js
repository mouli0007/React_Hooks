
A Simple Context api || UseContext Code Structure

import "./styles.css";
import React, { useState, createContext, useContext, Children } from "react";

export const AppContext = createContext(null);

export default function App({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setAuth] = useState(false);

  const login = () => {
    fetch("/login").then((res) => {
      setAuth(true);
      setUserInfo(res.usser);
    });
  };

  const logout = () => {
    fetch("/login").then((res) => {
      setAuth(false);
      setUserInfo(null);
    });
  };

  const value = {
    userInfo,
    setUserInfo,
    isAuth,
    setAuth
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
