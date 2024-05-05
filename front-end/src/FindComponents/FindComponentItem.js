import React from 'react';
import { NavLink } from 'react-router-dom';
import './FindComponentItem.css';

function FindComponentItem({ name, city, image, id, description }) {
    return (
        <div key={id}>
            <NavLink to={`/liked/${id}`}> {/* Зміна шляху з "/liked" на "/liked/:id" */}
                <div className="FirstItem">
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
