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
import BasicTable from "./pages/Admin/User";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

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

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/User" element={<BasicTable/>} />
          
        </Route>
      </Routes>
      {(!location.pathname.includes("/admin")) && <Footer />}
    </div>
  );
}

export default App;
