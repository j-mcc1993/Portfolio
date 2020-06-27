import React from 'react';
import Footer from './footer.js';
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
        <a className="project-link" href={props.url}>
            {props.title}
            <div className="project" style={props.imgStyle}>
                <div className="project-overlay">
                    {props.description}
                </div>
            </div>
        </a>
    );
}

/* Navigation bar + page header */
function NavBar(props) {
    return (
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 header">
                <h1 className="page-header">James McCullough</h1>
            </div>
            <div className="col-sm-4 nav-div">
                <div className="nav-item-div">
                    <a href="#" className={"nav-item" + props.active['project']}>Projects</a>
                </div>
                <div className="nav-item-div">
                    <a href="#" className="nav-item">Resume</a>
                </div>
                <div className="nav-item-div">
                    <a href="#" className={"nav-item" + props.active['contact']}>Contact</a>
                </div>
                <div className="nav-item-div">
                    <a href="#" className={"nav-item" + props.active['about']}>About Me</a>
                </div>
            </div>
        </div>
    );
}

/* Jumbotron-like div containing profile pic + hire me button */
function JumboTron(props) {
    return (
        <div className="jumbo-row">
            <div className="jumbo">
                <div className="namecard">
                    <div className="namecard-pic">
                        <ProfilePic />
                    </div>
                    <div className="namecard-tag">
                        <h2 className="namecard-header"><span className="orange">Hello! </span>I'm James</h2>
                        <div className="namecard-par-div">
                            <p className="namecard-par">
                                I am a programmer, web developer, musician and
                                photographer living in the San Francisco Bay Area.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hire-me-header">
                    <h2>Want to <span className="blue">hire me</span>?</h2>
                    <p className="hire-me-par">Email me at:</p>
                    <address>
                        <a href="mailto: j1mccull@ucsd.edu" id="email"><b>j1mccull@ucsd.edu</b></a>
                    </address>
                </div>
            </div >
        </div>
    );
}

/* Main body content */
function MainBody(props) {
    return (
        <div>
            <h1 className="page-header">Projects</h1>
            <div className="project-container">
                <div className="project-wrapper">
                    <Project url={'https://github.com/j-mcc1993/Portfolio'}
                        imgStyle={{ backgroundImage: "url('../images/port.jpg')" }}
                        title={'Portfolio Website'}
                        description={                    
                            <p className="overlay-par">
                                This website was designed and developed by me!  I used React.js to develop
                                the front-end, and Node.js for the back-end.  Web design is one of my
                                favorite ways to combine my love of art and coding.  React fits well into
                                my workflow because it brings the code for how things look together with the 
                                code for how things work.  As a programmer with a traditional background in
                                languages like Java and C++, React eases the transition into web-development 
                                by offering an Object-Oriented style approach to building apps.
                            </p>
                        } />
                    <Project url={'https://github.com/j-mcc1993/NES_Keyboard'}
                        imgStyle={{ backgroundImage: "url('../images/nes.jpg')" }}
                        title={'NES_Keyboard Arduino Library'}
                        description={                    
                            <p className="overlay-par">
                                This is an Arduino microcontroller library, written in C++, that handles serial
                                communication over USB between an NES game controller and a user's computer.
                                The library allows the user to press keyboard keys using the buttons of the analog
                                controller.  The purpose of the library is to allow users to use their original
                                game controllers to play emulated versions of their favorite games on their home
                                computers.  You can see this code in action by following this link to the github
                                repo where you will find a link to my YouTube demo video!
                            </p>
                        } />
                    <Project url={'https://github.com/j-mcc1993/SNES_Keyboard'}
                        imgStyle={{ backgroundImage: "url('../images/snes.jpg')" }}
                        title={'SNES_Keyboard Arduino Library'}
                        description={                    
                            <p className="overlay-par">
                                This library provides the same interface as the NES_Keyboard, but it works
                                for the SNES controller instead.  At their core, these analog controllers
                                are simple shift-registers that store button state as a binary numbers.
                                The NES and SNES controllers have the same communication protocol, but the
                                NES fits its button state into one byte, while the SNES requires two.  My
                                libraries allow arduino boards to mimic the polling behavior of the game
                                console to read the controller's button state.  Combined with libraries
                                for controlling keyboard presses with Arduino, you have a fully functional,
                                and authentic, game controller for retro classNameics.  Of all the code I've
                                written, I've used this the most!
                            </p>
                        } />
                    <Project url={'https://gist.github.com/j-mcc1993/694917ca74b254b56eef4560ff0d9eea'}
                        imgStyle={{ backgroundImage: "url('../images/code.jpg')" }}
                        title={'Reddit Meme-Posting Bot'}
                        description={                    
                            <p className="overlay-par">
                                When I was studying CS at UCSD, one of my professors became the inspiration
                                of many fun-spirited memes and copypastas on our school subreddit due to his 
                                notoriously difficult classNamees.  I wrote a Python-based Reddit bot to periodically 
                                scan the USCD subreddit for new posts about this professor and post memes in the
                                comments.  To keep this bot running full time, the Python script lived on my 
                                Raspberry Pi inside a cron job that ran every 30 minutes.  I always enjoyed 
                                meeting new classNamemates who were familiar with the bot from reading the 
                                subreddit!
                            </p>
                        } />
                    <Project url={'https://gist.github.com/j-mcc1993/ef75a9227eeac139ee94'}
                        imgStyle={{ backgroundImage: "url('../images/fractal.png')" }}
                        title={'Bitwise Fractal Image Generator'}
                        description={                    
                            <p className="overlay-par">
                                In a discussion about Pascal programming, my first calculus professor mentioned that
                                in the '80s he'd stumbled on the fact that bitwise operations are actually fractal 
                                functions.  I went home and put this script together to see for myself, and it's true!  
                                If you allow the color of each pixel in an image to be determined by some
                                combination of bitwise operations on the values of its (x,y) coordinates, then
                                the result is an interesting fractal image like the one shown here!
                            </p>
                        } />
                    <Project url={'https://gist.github.com/j-mcc1993/a3bd0cdd9895a0ddb833ce915bfb0bef'}
                        imgStyle={{ backgroundImage: "url('../images/post.png')" }}
                        title={'Reddit Top Post-Time Histogram'}
                        description={                    
                            <p className="overlay-par">
                                I was curious to find out: what time are the most popular posts on Reddit usually
                                posted?  I used Python and the PRAW library to crawl Reddit and collect post-time 
                                data on hundreds of top posts to find out.  This script displays a histogram showing 
                                the distribution of post-times across each hour of the day.  It turns out the
                                majority of the top posts get posted in between 6am and 12pm Pacific Time.  Makes
                                some sense!
                            </p>
                        } />
                </div>
            </div>
        </div>
    );
}

/* Top level wrapper */
function TopLvlBody(props) {
    const activity = {
        'project' : " nav-item-active",
        'contact' : "",
        'about'   : ""
    };
    return (
        <div className="container-fluid">
            <NavBar active={activity} />
            <JumboTron />
            <MainBody />
            <Footer />
        </div>
    );
}

export default TopLvlBody;