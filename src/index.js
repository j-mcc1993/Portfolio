import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import TopLvlBody from './home.js';
import WebFont from 'webfontloader';

  WebFont.load({

    google: {
      families: [
                'Shadows Into Light',
                'Yellowtail', 
                'Roboto', 
                'Pacifico', 
                'Permanent Marker', 
                'Baloo Thambi 2:800'
                ]

     }});

ReactDOM.render(<TopLvlBody />, document.getElementById("root"));