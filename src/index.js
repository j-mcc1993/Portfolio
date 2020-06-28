import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/stylesheet.css';
import WebFont from 'webfontloader';
import './images/snes.jpg';
import './images/nes.jpg';
import './images/port.jpg';
import './images/code.jpg';
import './images/fractal.png';
import './images/post.png';

WebFont.load({
    google: {
        families: [
            'Shadows Into Light',
            'Yellowtail',
            'Rock Salt',
            'Pacifico',
            'Permanent Marker',
            'Baloo Thambi 2:800'
        ]
    }
});

ReactDOM.render(<App />, document.getElementById("root"));