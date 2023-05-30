import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
<<<<<<< HEAD
import User from "./pages/Admin/user";
=======
import User from "./pages/Admin/User";
>>>>>>> 8c3a24afa2086645f8c7c8ad2d050ac7863b499a

function App() {
  const location = useLocation();
  console.log("navigate", location.pathname.includes("/Admin"));
  return (
    <div className="App">
      {!location.pathname.includes("/admin") && (
        <Navbar isAuth={false} logoData={undefined} />
      )}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
       
          <Route path="User" element={<User />} />
          
        </Route>
      </Routes>
      {(!location.pathname.includes("/admin")) && <Footer />}
    </div>
  );
}

export default App;
