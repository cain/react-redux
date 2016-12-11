import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (

        <nav className="navbar navbar-dark bg-inverse">
            <IndexLink to="/" className="navbar-brand"  activeclassName="active">React</IndexLink>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-link" activeclassName="active">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/courses" className="nav-link" activeclassName="active">Courses</Link>
                </li>
        </ul>
    </nav>
    );
};

export default Header;

