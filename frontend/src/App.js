import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navigation from "./components/Navigation/Navigation";

import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
