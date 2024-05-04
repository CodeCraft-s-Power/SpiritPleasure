import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';
import { useUser } from '../UserContext';
import Logout from "../Logout Components/Logout";
function TopNavBar() {

    const { isLoggedIn } = useUser();

    return (
        <div className="slider-button">
            <div className="Exit-button">
                {/* Відображення або посилання на вихід або на вхід, залежно від стану залогіненості */}
                {isLoggedIn ? (
                    <Logout/>
                ) : (
                    <NavLink to="/login">
                        <button className="exit-button-button"></button>
                    </NavLink>
                )}
            </div>
            <label className="slider">
                <input type="checkbox"/>
                <span className="slider-toggle"></span>
            </label>
        </div>
    );
}

export default TopNavBar;
