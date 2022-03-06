import React from 'react';
//@ts-ignore
import avatar from '../img/avatar.png';
import { NavLink } from 'react-router-dom';

function Navbar() { 
    return(     
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={ avatar } alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact actionClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" exact actionClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Portifolios" exact actionClassName="active">
                            Portifolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Blogs" exact actionClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact" exact actionClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>  
                 <footer className="footer">
                    <p>
                            @2022 copyright | Lorem ipsum
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar;