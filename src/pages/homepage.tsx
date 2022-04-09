import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Lorem Ipsum.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem upsum dolor sit amet, consectetur adipiscing elit.
                    cupiditate facere, numquam vitae placerat
                </p>
                <div className="icons">
                        <FontAwesomeIcon icon={faFacebook} />
                </div>
            </header>
        </div>
    )
}

export default HomePage;