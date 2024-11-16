import React from "react";
import Header from "../components/navigation/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <Header />
      <div className="flex items-center justify-center">
        {/* All components replace the outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
