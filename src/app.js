import React, { Suspense } from 'react';
import NavBar from './navbar.js';
import Home from './home.js';
import Footer from './footer.js';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

/* Lazy load auxillary pages */
const About = React.lazy(() => import('./about.js'));
const Contact = React.lazy(() => import('./contact.js'));

/* Main app wrapper */
function App(props) {
    return (
        <Router>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default App;