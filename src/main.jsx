import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Blog from "./pages/Blog";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import ShopingCart from "./pages/ShopingCart";
import Layout from "./components/Layout.jsx";
import Checkout from "./pages/Checkout";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import DetailProduct from "./pages/DetailProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <DetailProduct /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/shoping-cart", element: <ShopingCart /> },
      { path: "/check-out", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
