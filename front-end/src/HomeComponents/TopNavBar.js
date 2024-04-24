import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

function TopNavBar() {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="slider-button">
            <div className="Exit-button">
                <NavLink to="/login">
                    <button className="exit-button-button"></button>
                </NavLink>
            </div>
            <label className="slider">
                <input type="checkbox" checked={theme === 'dark'} onChange={switchTheme} />
                <span className={`slider-toggle ${theme}`}></span>
            </label>
        </div>
    );
}

export default TopNavBar;
