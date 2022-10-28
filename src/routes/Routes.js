import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import ForgetPassword from '../components/ForgetPassword';
import ResetPassword from '../components/ResetPassword';

function MainRoutes() {
  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forget" exact element={<ForgetPassword />} />
        <Route path="/reset/password/:id/:token" exact element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;