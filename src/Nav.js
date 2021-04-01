import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AboutYou from './pages/AboutYou/AboutYou';
import Calendar from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

export default function nav(){
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/aboutyou">
                    <AboutYou />
                </Route>
                <Route  path="/contact">
                    <Calendar />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}