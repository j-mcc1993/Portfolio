import React from 'react';
import {NavLink} from 'react-router-dom';
import Pdf from './docs/resume.pdf';

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
                    <NavLink exact to="/" className="nav-item">Projects</NavLink>
                </div>
                <div className="nav-item-div">
                    <a href={Pdf} target="_blank" className="nav-item">Resume</a>
                </div>
                <div className="nav-item-div">
                    <NavLink to="/about" className="nav-item">About Me</NavLink>
                </div>
                <div className="nav-item-div">
                    <NavLink to="/contact" className="nav-item">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;