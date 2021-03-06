import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div id='banner'>
                <div>Coronavirus statistic / COVID 19</div>
                <h4>Information Hub</h4>
            </div>
            <nav>
                <ul className="menu-area">
                    <li><NavLink to='/overall'>Global</NavLink></li>
                    <li><NavLink to='/find'>Find Country </NavLink></li>
                </ul>
            </nav>
        </>
    )
}
export default Header