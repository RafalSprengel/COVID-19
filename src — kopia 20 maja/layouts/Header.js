import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='banner'>
                <div>Coronavirus statistic / COVID 19</div>
                <h4>Information Hub</h4>
            </div>
            <nav>
                <ul className="menu-area">
                    <li><NavLink to='/overall'>Overall</NavLink></li>
                    <li><NavLink to='/find'>Find Country </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header