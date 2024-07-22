// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Home from './Home';
import Events from './Events';
import './index.css';

const App = () => {
  const [configData, setConfig] = useState('');

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error('Network response was not ok when reading config file');
        }
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Error fetching config file:', error);
      }
    };
    fetchConfig();
  }, []);

  // console.log("json", configData)

  return (
    <Router>
        <NavigationBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home configData={configData}/>} />
            <Route path="/events" element={<Events />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
    </Router>
  );
}

export default App;