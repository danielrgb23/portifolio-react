import React from 'react';
//@ts-ignore
import avatar from '../img/avatar.jpg';
//@ts-ignore
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact" exact activeClassName="active">
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