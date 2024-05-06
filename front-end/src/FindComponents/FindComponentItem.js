import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './FindComponentItem.css';
import ReadMoreComponent from "./ReadMoreComponent";

function FindComponentItem({ name, city, image, id, description }) {
    const [state, setState] = useState({ id, name, description });
    console.log(state)

    useEffect(() => {
        setState(state);
    }, []);

    return (
        <div key={id} >
            {/* Обробник натискання для показу ReadMoreInfoText */}
            <NavLink to={"/read-more/"} state={{state}}>
                <div className="FirstItem" >
                    <button className="LikeButton"></button>
                </div>
            </NavLink>
            <div className="UnderItmeText">
                <span className="UnderItmeText1">{name}</span>
                <br />
                <span className="UnderItmeText2">{city}</span>
            </div>
        </div>
    );
}

export default FindComponentItem;