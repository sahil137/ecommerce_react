import React from "react";
import Header from "../components/navigation/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      Home
      <Outlet />
    </React.Fragment>
  );
};

export default Home;
