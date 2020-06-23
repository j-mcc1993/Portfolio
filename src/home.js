import React from 'react';

/* Main profile picture component */
function ProfilePic(props) {
    return (
        <img className="profile-pic mx-auto d-block rounded-circle" src={"./images/me.jpg"} />
    );
}

/* Header component, top-level */
function JumboTron(props) {
    return (
        <div class="container-fluid jumb">
            <div class="header">
                <h1>Hi, I'm James McCullough</h1>
            </div>

            <div class="row">
                <div class="col-sm-3 text-center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-6 text-center">
                    <ProfilePic />
                </div>
                <div class="col-sm-3"></div>
            </div>
            <p>Welcome to my website!</p>
        </div >
    );
}

/* Main body content */
function BodyMain(props) {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h3>Welcome</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>A little bit about me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>What I'm looking for</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Top level wrapper */
function TopLvlBody(props) {
    return(
        <div>
            <JumboTron />
            <BodyMain />
        </div>
    );
}

export default TopLvlBody;