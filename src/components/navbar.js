import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => (
    <nav>
        <h2 className="logo">{props.title}</h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-menu-link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/notebook">Notebooks</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/impresoras">impresoras</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/perifericos">perifericos</NavLink></li>
        </ul>
    </nav>
);

export default NavBar;