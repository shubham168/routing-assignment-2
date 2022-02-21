import React from "react";
import { DashboardPage } from "../Pages/DashboardPage";
import { Link, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  return (
    <div>
      <DashboardPage />
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet />
    </div>
  );
};
