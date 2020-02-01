import React from 'react';
import './App.css';

import NavBar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
