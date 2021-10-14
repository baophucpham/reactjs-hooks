import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Error from "./components/Error";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product" component={Product} />
        <Route path="/About" component={About} />
        <Route path="/:someString" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
