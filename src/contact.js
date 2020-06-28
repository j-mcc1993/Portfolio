import React from 'react';
import Container from './container.js';

/* Contact info page */
function Contact(props) {
    return (
        <Container>
            <h2 className="namecard-header about">Let's get in <span className="orange">touch...</span></h2>
            <div className="">
                <p>E-Mail me at: <a href="mailto: j1mccull@ucsd.edu" id="email" className="tab"><b>j1mccull@ucsd.edu</b></a></p>
                <p>...or find me on social media by clicking one of the links below!</p>
            </div>
        </Container>
    );
}

export default Contact;