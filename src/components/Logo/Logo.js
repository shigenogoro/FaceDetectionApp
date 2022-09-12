import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt>
                <div style={{ height: '150px', width: '150px'}}>
                    <div className="Tilt-inner pa3">
                        <img style={{paddintTop: '5px'}} alt='logo' src={brain} />
                    </div>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;