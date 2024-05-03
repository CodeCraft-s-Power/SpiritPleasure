import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './FindComponentItem.css';
import ReadMoreInfoText from "./ReadMoreInfoText";

function FindComponentItem({ name, city, image, id, description }) {
    const handleClick = () => {
        const routeState = { id, name, description };
        return { state: routeState };
    };

    return (
        <div key={id}>
            {/* Обробник натискання для показу ReadMoreInfoText */}
            <NavLink to="/read-more" onClick={handleClick}>
                <div className="FirstItem" style={{ backgroundImage: `url(${image})` }}>
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

export default FindComponentItem