import React from 'react';
import NavBar from './navbar.js';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
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
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;