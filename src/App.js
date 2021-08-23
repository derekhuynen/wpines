import React from "react";
import './css/App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Weather from './components/Weather'
import Cabins from './pages/Cabins'
import Restaurants from './pages/Restaurants'
import Activities from './pages/Activities'
import Test from './pages/Test'

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>

                <Switch>
                    <Route path="/restaurants" component={Restaurants}/>

                    <Route path="/activities" component={Activities}/>

                    <Route path="/cabins" component={Cabins}/>

                    <Route path="/weather" component={Weather}/>

                    <Route path="/contact" component={Test}/>

                    <Route path="/" component={Home}/>

                </Switch>

                <Footer/>
            </ Router>
        </div>
    );
}

export default App;
