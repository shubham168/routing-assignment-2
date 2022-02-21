import React, { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../components/PrivateRoutes";
import { Protect } from "../components/Protect";
import { Welcome } from "../components/Welcome";
import { AuthContext } from "../context/AuthContext";

import { LoginPage } from "./LoginPage";
import { SettingsPage } from "./SettingsPage";
export const RoutesPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/*"
          index
          element={
            <>
              Home
              <LoginPage /> <Outlet />
              <Welcome />
            </>
          }
        />
        <Route element={<Protect />}>
      
          <Route path="dashboard" element={<PrivateRoutes />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          </Route>
        
          console.log("login")
        
      </Routes>
    </>
  );
};
