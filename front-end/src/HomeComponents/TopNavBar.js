import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';
import { useUser } from '../UserContext';
import Logout from "../Logout Components/Logout";

function TopNavBar() {
    const { isLoggedIn } = useUser();

    return (
        <div className="top-navbar">
            <div className="exit-button">
                {isLoggedIn ? (
                    <Logout />
                ) : (
                    <NavLink to="/login">
                        <button className="exit-button-button"></button>
                    </NavLink>
                )}
            </div>
            <label className="slider-container">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default TopNavBar;
