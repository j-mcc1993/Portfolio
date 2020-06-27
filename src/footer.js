import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare, faGithubSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

/* Footer with social media links */
function Footer(props) {
    return (
        <div className="footer">
            <hr />
            <div className="icon-attr">
                <a href="https://www.facebook.com/jamie.mccullough1/" className="icon-link">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/james-mccullough-59b9a7180/" className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/j-mcc1993" className="icon-link">
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                </a>
                <a href="https://www.instagram.com/j.mcc3093/" className="icon-link">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default Footer;