import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserAccount from "./pages/UserAccount/UserAccount";


const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/user-account' element={<UserAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
