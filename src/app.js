import React from 'react';
import NavBar from './navbar.js';
import Home from './home.js';
import Footer from './footer.js';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

/* Main app wrapper */
function App(props) {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/contact">
                    <Home />
                </Route>
                <Route path="/about">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;