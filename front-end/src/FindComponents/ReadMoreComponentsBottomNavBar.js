import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './ReadMoreComponentBottomNavBar.css'

const ReadMoreComponentsBottomNavBar = ({ place, onHistory }) =>  {

    const { id, name} = place;
    // console.log(`on history state: ${onHistory}`)
    return (
        <div key={id}>
            <ul className="ulnavbar3">
                <li id="li-text2">
                    <span className="custom-span1">Spirit Pleasure</span>
                    <br/>
                    <span className='custom-span2'> насолодись Україною</span>
                </li>
                {/*{onHistory ? (*/}
                {/*    <div>*/}
                {/*        <NavLink to={"/history"}>*/}
                {/*            <button className="CircleButton"></button>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <div>*/}
                {/*        <NavLink to={"/find"}>*/}
                {/*            <button className="CircleButton"></button>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*)}*/}
                <NavLink to={"/find"}>
                    <button className="CircleButton"></button>
                </NavLink>

                <div className="ItemNameContainer">{name}</div>
                <button className="HeartButton"></button>
            </ul>
        </div>
    );
}

export default ReadMoreComponentsBottomNavBar;