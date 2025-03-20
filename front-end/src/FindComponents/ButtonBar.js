// ButtonBar.js
import React, {Component, useState} from 'react';

import { NavLink } from 'react-router-dom';
import "./ButtonBar.css";


function ButtonBar() {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className="slider-butt">
            <div className="Exit-butt">
                <button className="exit-butt-butt"></button>
            </div>
            <label className="slider1">
                <input type="checkbox" checked={theme === 'dark'} onChange={switchTheme} />
                <span className={`slider-toggle1 ${theme}`}></span>
            </label>
        </div>
    );
}


export default ButtonBar;