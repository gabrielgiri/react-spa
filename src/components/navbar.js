import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => (
    <nav>
        <h2 className="logo">{props.title}</h2>
        <ul className="nav-menu">
            <li><Link className="nav-menu-link" to="/">Home</Link></li>
            <li><Link className="nav-menu-link" to="/notebook">Notebooks</Link></li>
            <li><Link className="nav-menu-link" to="/impresoras">impresoras</Link></li>
            <li><Link className="nav-menu-link" to="/perifericos">perifericos</Link></li>
        </ul>
    </nav>
);

export default NavBar;