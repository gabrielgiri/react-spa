import React from 'react';

const NavBar = (props) => (
    <nav>
        <h2 className="logo">{props.title}</h2>
        <ul className="nav-menu">
            <li><a href="#" className="nav-menu-link">Home</a></li>
            <li><a href="#" className="nav-menu-link">Best Actors</a></li>
            <li><a href="#" className="nav-menu-link">Best Actress</a></li>
            <li><a href="#" className="nav-menu-link">Best Film</a></li>
        </ul>
    </nav>
);

export default NavBar;