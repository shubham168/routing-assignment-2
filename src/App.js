import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Home />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
