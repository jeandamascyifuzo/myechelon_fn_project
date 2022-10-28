import React from 'react';
import Home from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashRoute from './routes/DashRoute';
import MainRoute from './routes/Routes'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<DashRoute />} />
        </Route>
        <Route path="/*" exact element={<MainRoute />} />
      </Routes>
    </Router>
  );
}

export default App;