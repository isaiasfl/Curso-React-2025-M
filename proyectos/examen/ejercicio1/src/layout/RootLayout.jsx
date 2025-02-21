import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <Outlet />
      <footer>By Isaías FL</footer>
    </>
  );
};

export default RootLayout;
