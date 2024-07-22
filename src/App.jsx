// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Home from './Home';
import './index.css';


function App() {
  return (
    <Router>
        <NavigationBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
    </Router>
  );
}

export default App;