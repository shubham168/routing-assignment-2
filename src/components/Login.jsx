import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { RoutesPage } from "../Pages/Routes";
import styles from "./Login.module.css";

export const Login = () => {
  const { isAuth, toggle } = useContext(AuthContext);

  return (
    <div>
      {!isAuth ? (
        <div>
          "You need to login to access the dashboard"
          <button className={styles.loginBtn} onClick={toggle}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <RoutesPage />
        <button className={styles.logoutBtn} onClick={toggle}>
          Logout
        </button>
        </div>
      )}
    </div>
  );
};
