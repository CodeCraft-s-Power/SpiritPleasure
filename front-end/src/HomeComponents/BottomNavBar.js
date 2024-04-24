import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./BottomNavBar.css"

class BottomNavBar extends Component {
    render() {
        return (
            <div>
                <ul className="ulnavbar2">
                    <li id="li-text1">
                        <span className="custom-span1">Spirit Pleasure</span>
                        <br />
                        <span className='custom-span2'> насолодись Україною</span>
                    </li>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/find" activeClassName="active">Find</NavLink></li>
                    <li><NavLink to="/liked" activeClassName="active">Liked</NavLink></li>
                    <li><NavLink to="/history" activeClassName="active">History</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default BottomNavBar;
