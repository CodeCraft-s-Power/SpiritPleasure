// TopNavBar.js
import React, { Component } from 'react';
import "./TopNavBar.css";


class TopNavBar extends Component {
    render() {
        return (
                <div className="slider-button">
                    <div className="Exit-button">
                        <button className="exit-button-button"></button>
                    </div>
                    <label className="slider">
                        <input type="checkbox" />
                        <span className="slider-toggle"></span>
                    </label>
                </div>
        );
    }
}

export default TopNavBar;