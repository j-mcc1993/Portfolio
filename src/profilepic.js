import React from 'react';
import me from './images/me.jpg';

/* Main profile picture component */
function ProfilePic(props) {
    return (
        <img className="profile-pic mx-auto d-block rounded-circle" src={me} />
    );
}

export default ProfilePic;