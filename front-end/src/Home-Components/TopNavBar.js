// TopNavBar.js
import React, { Component } from 'react';
import "./TopNavBar.css";


class TopNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }));
    };

    render() {
        const { isDarkMode } = this.state;
        return (
            <div className={`container ${isDarkMode ? 'dark-theme' : ''}`}>
                <div className="slider-button">
                    <div className="Exit-button">
                         <button className="exit-button-button"></button>
                    </div>
                    <label className="slider">
                        <input type="checkbox" checked={isDarkMode} onChange={this.toggleTheme} value="true"/>
                        <span className="slider-toggle"></span>
                    </label>
                </div>
            </div>
        );
    }
}

export default TopNavBar;
