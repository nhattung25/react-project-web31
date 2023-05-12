import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";
export default function Layout() {
  return (
    <div>
      <Header />
      <Signup />
      <Outlet />
      <Footer />
    </div>
  );
}
