import React, { useState } from "react";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import Nav from './component/nav'
import Home from './component/home/home'
import News from './component/news'
import Profil from './component/profil'
import Admin from './component/admin'
import Login from './component/login'
import Register from './component/register'
import Market from './component/market'

import LoginRegister from "./component/LoginRegister";

function App() {
  console.log("update")
  return (
    <div >
       <Nav /> 
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="market" element={<Market />} />
        <Route path="news" element={<News />} />
        <Route path="profil" element={<Profil />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginregister" element={<LoginRegister/>} />

    </Routes>
    </div>
  );
}

export default App;
