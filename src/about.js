import React from 'react';
import Container from './container.js';
import ProfilePic from './profilepic.js';

/* About me page */
function About(props) {
    return (
        <Container>
            <h2 className="namecard-header about">A little bit about <span className="orange">me...</span></h2>
            <div className="about-me-profile">
                <ProfilePic />
            </div>
            <div className="about-me-text">
                <p>
                    I was born and raised in the San Francisco Bay Area.  Growing up, I loved playing guitar
                    and piano, taking photos, reading books and playing with computers.  My dad and older
                    brother were both professional programmers, and they inspired me to pick up the torch
                    and pursue a career in software myself.
                </p>
                <p>
                    I earned two Bachelor's degrees from U.C. San Diego in Computer Science and Economics.
                    While I was a student, I worked for the Center for Peace and Security Studies as a
                    research assistant in the Machine Learning for Social Sciences Lab.  I'm interested in pursuing roles as a software developer/engineer, data
                    scientist/analyst or research assistant.
                </p>
            </div>
        </Container>
    );
}

export default About;