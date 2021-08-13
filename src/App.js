import React from "react";
import './css/App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from "./pages/SearchPage";
import Footer from './components/Footer'
import Test from './pages/Test'
import Restaurants from './pages/Restaurants'

function App() {
  return (
      <div className="app">
        <Router>
          <Header />

          <Switch>
              <Route path="/search">
                  <SearchPage />
              </Route>
              <Route path="/restaurants">
                  <Restaurants />
              </Route>
              <Route path="/cabins">
                  <Test />
              </Route>
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
