import React from 'react';
import me from './images/me.jpg';

/* Main profile picture component */
function ProfilePic(props) {
    return (
        <img className="profile-pic mx-auto d-block rounded-circle" src={me} />
    );
}

/* Project item picture */
function Project(props) {
    return (
        <a class="project-link" href={props.url}>
            {props.title}
            <div class="project" style={props.imgStyle}>
                <div class="project-overlay">
                    <p class="overlay-par">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </a>
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
                    <a href="#" class="nav-item nav-item-active">Projects</a>
                </div>
                <div class="nav-item-div">
                    <a href="#" class="nav-item">Resume</a>
                </div>
                <div class="nav-item-div">
                    <a href="#" class="nav-item">Contact</a>
                </div>
                <div class="nav-item-div">
                    <a href="#" class="nav-item">About Me</a>
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
                        <h2 class="namecard-header"><span class="orange">Hello! </span>I'm James</h2>
                        <div class="namecard-par-div">
                            <p class="namecard-par">
                                I am a programmer, web developer, musician and
                                photographer living in the San Francisco Bay Area.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hire-me-header">
                    <h2>Want to <span class="blue">hire me</span>?</h2>
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
                    <Project url={'https://github.com/j-mcc1993/Portfolio'}
                        imgStyle={{ backgroundImage: "url('../images/port.jpg')" }}
                        title={'Portfolio Website'} />
                    <Project url={'https://github.com/j-mcc1993/NES_Keyboard'}
                        imgStyle={{ backgroundImage: "url('../images/nes.jpg')" }}
                        title={'NES_Keyboard Arduino Library'} />
                    <Project url={'https://github.com/j-mcc1993/SNES_Keyboard'}
                        imgStyle={{ backgroundImage: "url('../images/snes.jpg')" }}
                        title={'SNES_Keyboard Arduino Library'} />
                    <Project url={'https://gist.github.com/j-mcc1993/694917ca74b254b56eef4560ff0d9eea'}
                        imgStyle={{ backgroundImage: "url('../images/code.jpg')" }}
                        title={'Reddit Meme-Posting Bot'} />
                    <Project url={'https://gist.github.com/j-mcc1993/ef75a9227eeac139ee94'}
                        imgStyle={{ backgroundImage: "url('../images/fractal.png')" }}
                        title={'Bitwise Fractal Image Generator'} />
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