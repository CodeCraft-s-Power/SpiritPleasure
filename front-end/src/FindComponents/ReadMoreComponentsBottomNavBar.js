import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './ReadMoreComponentBottomNavBar.css'

const ReadMoreComponentsBottomNavBar = ({ place }) =>  {

    const { id, name} = place;

    return (
        <div key={id}>
            <ul className="ulnavbar3">
                <li id="li-text2">
                    <span className="custom-span1">Spirit Pleasure</span>
                    <br/>
                    <span className='custom-span2'> насолодись Україною</span>
                </li>
                <NavLink to={"/find"}>
                    <button className="CircleButton" ></button>
                </NavLink>
                <div className="ItemNameContainer">{name}</div>
                <button className="HeartButton"></button>
            </ul>
        </div>
    );
}

export default ReadMoreComponentsBottomNavBar;