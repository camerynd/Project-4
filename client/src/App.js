import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import {useState} from 'react'
import './App.css';
import Home from "./components/Home"
import Pages from "./components/Pages"

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="navbar-container">
          <NavLink  className="navbar-text" to="/"> Home</NavLink>
          <NavLink className="navbar-text" to="/pages"> Pages</NavLink>
        </nav> 
        <Switch>
          <Route exact path="/pages">
            <Pages/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
