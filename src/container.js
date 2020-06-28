import React from 'react';

/* Generic container for central elements */
function Container(props) {
    return (
        <div className="generic-container">
            <div className="wrapper">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Container;