import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserAccount from "./pages/UserAccount";
import PrivateRoute from "./components/PrivateRoute";


const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/user-account' element={<UserAccount />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
