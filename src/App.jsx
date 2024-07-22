// src/App.jsx
import React from 'react';
import NavigationBar from './Navbar';
import './App.css';

function App() {
  return (
    <div style={{width:"80%"}}>
      <NavigationBar />
      <div className="container mt-3">
        {/* <h2>Welcome to My React App</h2> */}
        <p>Адрес: Ул. Красноармейская 12</p>
        <p>Адрес: Ул. Красноармейская 12</p>
      </div>
    </div>
  );
}

export default App;