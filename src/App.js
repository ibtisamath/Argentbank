import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import "./App.css";


const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
