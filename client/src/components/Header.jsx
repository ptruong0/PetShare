import React from 'react';

import catSketch from '../assets/cat.png';
import dogSketch from '../assets/dog.png';

function Header() {
    return (
        <header className="header">
            <div>
                <img src={catSketch} alt="" height="75px" />
                <h1>PetShare</h1>
                <img src={dogSketch} alt="" height="75px" />
            </div>
        </header>
    );
}

export default Header;