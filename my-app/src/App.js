import React from 'react';
import './App.css';

import NavBar from "./Navbar.jsx";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
