import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <Outlet />
      <p>footer</p>
    </>
  );
};

export default RootLayout;
