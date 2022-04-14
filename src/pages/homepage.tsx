import React from 'react';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
                        <Link to={undefined} className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon it" />
                        </Link>
                        <Link to={undefined} className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        </Link>
                        <Link to={undefined} className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
                        </Link>

                </div>
            </header>
        </div>
    )
}

export default HomePage;