import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginx from './Login/Loginx'; // Assuming the Loginx component is in a separate file
import Registerx from './Register/Registerx';

function Auth() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginx />} />
        <Route path="/register" element={<Registerx />} />
      </Routes>
    </Router>
  );
}

export default Auth;