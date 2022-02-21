import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
 let navigate = useNavigate();
  const toggle = () => {
     isAuth ? navigate("/home") : navigate("/dashboard")
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};
