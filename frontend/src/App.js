import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

/**** Pages ****/
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AddProduct from "./pages/AddProduct/AddProduct";
import ProductPage from "./pages/ProductPage/ProductPage";
import Category from "./pages/Category/Category";
import CartPage from "./pages/CartPage/CartPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

/**** Components *****/
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {user && (
            <>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </>
          )}

          {user && user.isAdmin && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
            </>
          )}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<Category />} />

          <Route path="/new-product" element={<AddProduct />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
