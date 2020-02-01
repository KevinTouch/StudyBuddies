import React from 'react';
import './App.css';

import NavBar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />
       </Router>
    </div>
  );
}

export default App;
