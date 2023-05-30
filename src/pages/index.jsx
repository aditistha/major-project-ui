import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar isAuth={false} logoData={undefined} />
      <h1>Welcome to Home Page</h1>
    </div>
  );
}
