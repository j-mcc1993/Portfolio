import React from 'react';
import './images/me.jpg';

/* Main profile picture component */
function ProfilePic(props) {
    return (
        <img className="profile-pic mx-auto d-block rounded-circle" src={"./images/me.jpg"} />
    );
}

/* Navigation bar + page header */
function NavBar(props) {
    return (
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 header">
                <h1 class="page-header">James McCullough</h1>
            </div>
            <div class="col-sm-4 nav-div">
                <div class="nav-item-div">
                    <p class="nav-item nav-item-active">Projects</p>
                </div>
                <div class="nav-item-div">
                    <p class="nav-item">Resume</p>
                </div>
                <div class="nav-item-div">
                    <p class="nav-item">Contact</p>
                </div>
                <div class="nav-item-div">
                    <p class="nav-item">About Me</p>
                </div>
            </div>
        </div>
    );
}

/* Jumbotron-like div containing profile pic + hire me button */
function JumboTron(props) {
    return (
        <div class="jumbo-row">
            <div class="jumbo">
                <div class="namecard">
                    <div class="namecard-pic">
                        <ProfilePic />
                    </div>
                    <div class="namecard-tag">
                        <h2 class="namecard-header"><span>Hello, </span>I'm James</h2>
                        <div class="namecard-par-div">
                            <p class="namecard-par">
                                I am a programmer, web developer, musician and
                                photographer living in the San Francisco Bay Area.
                                </p>
                        </div>
                    </div>
                </div>
                <div class="hire-me-header">
                    <h2>Want to <span>hire me</span>?</h2>
                    <p class="hire-me-par">Email me at: <address><b>j1mccull@ucsd.edu</b></address></p>
                </div>
            </div >
        </div>
    );
}

/* Main body content */
function MainBody(props) {
    return (
        <div>
            <h1 class="page-header">Projects</h1>
            <div class="project-container">
                <div class="project-wrapper">
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                </div>
            </div>
        </div>

    );
}

/* Top level wrapper */
function TopLvlBody(props) {
    return(
        <div class="container-fluid">
            <NavBar />
            <JumboTron />
            <MainBody />
        </div>
    );
}

export default TopLvlBody;