import React from "react";
import './css/App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
      <div className="app">
        <Router>
          <Header />

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </ Router>
      </div>
  );
}

export default App;
