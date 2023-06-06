import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useNavigate,
    useLocation, createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import User from "./pages/Admin/user";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <div><h2>Error Section</h2></div>,
        },
        {
            path: "admin/*",
            element: <Admin/>,
            errorElement: <div><h2>Error Section</h2></div>,
        },
        {
            path: "*",
            element: <Home/>
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router}>
            </RouterProvider>
        </div>
    );
}

export default App;
