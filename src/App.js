import React from "react";
import './css/App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from "./pages/SearchPage";
import Footer from './components/Footer'
import Weather from './components/Weather'
import Cabins from './pages/Cabins'
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
                  <Cabins />
              </Route>
              <Route path="/weather">
                  <Weather />
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
