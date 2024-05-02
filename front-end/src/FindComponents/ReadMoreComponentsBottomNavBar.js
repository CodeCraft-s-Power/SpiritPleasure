import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './ReadMoreComponentBottomNavBar.css'

class ReadMoreComponentsBottomNavBar extends Component {
    render() {
        return (
            <div>
                <ul className="ulnavbar3">
                    <li id="li-text2">
                        <span className="custom-span1">Spirit Pleasure</span>
                        <br/>
                        <span className='custom-span2'> насолодись Україною</span>
                    </li>
                    <div className="ItemNameContainer">Тунель кохання</div>
                </ul>
            </div>
        );
    }
}

export default ReadMoreComponentsBottomNavBar;