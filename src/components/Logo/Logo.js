import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './cerebro.png';

const Logo = () => {
    return (
        <div className='Logo pa4 mt0'>
            <Tilt className="Tilt br4 h2 w2 dib shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa2"> <img style={{paddingTop: '5px'}} alt='logo' src={brain}></img> </div>
            </Tilt>
        </div>    );
}

export default Logo;
