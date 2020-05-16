import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Signup from "./signup";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
          <div className="content">
            {/* <Route path="/" component={}/> */}
            <Route path="/signup" component={Signup}/>
          </div>
        </HashRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Anoop's application!</h2>
      </header>
    </div>
  );
}

export default App;
