import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';





const Dropdown = () => {
    const currentDropdownItems = [
        {
            url: '/sub1',
            description: 'ITEM 1'
        },
        {
            url: '/sub2',
            description: 'ITEM 2'
        },
        {
            url: '/sub3',
            description: 'ITEM 3'
        },
    ]; 
    const [activeItem, setActiveItem] = useState(currentDropdownItems[0]);


    const renderDropdownItem = (item, index) => {
        const { url, description } = item;

        return (
            <li onClick={() => handleDropdownItemClick(item)} key={index}>
                <NavLink className="nav-menu-link" exact to={url}>
                    {description}
                </NavLink>
            </li>
        );
    }
    
    const handleDropdownItemClick = (item) => {
        setActiveItem(item);
    }
    
    return (
        <li>
            <NavLink className="nav-menu-link dropdown" exact to={activeItem.url}>
                <div className="dropbtn">Dropdown</div>
                    <div class="dropdown-content">
                        <ul>
                            {currentDropdownItems.map( (item) => renderDropdownItem(item)) }
                        </ul>
                    </div>
            </NavLink>
        </li>
    )
}


const NavBar = (props) => (
    <nav>
        <h2 className="logo">{props.title}</h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-menu-link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/notebook">Notebooks</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/impresoras">impresoras</NavLink></li>
            <li><NavLink className="nav-menu-link" exact to="/perifericos">perifericos</NavLink></li>
            <Dropdown />
        </ul>
    </nav>
);

export default NavBar;