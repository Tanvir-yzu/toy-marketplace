import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/share/NavBar";
import Footer from "./components/share/Footer";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
