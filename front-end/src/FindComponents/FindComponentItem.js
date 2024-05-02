import React from 'react';
import './FindComponentItem.css'
function FindComponentItem(props) {
    return (
        <div>
            <div className="FirstItem">
                <button className="LikeButton"></button>
            </div>
            <div className="UnderItmeText">
                <span className="UnderItmeText1">Тунель кохання</span>
                <br/>
                с.Клевань
            </div>
        </div>
    );
}

export default FindComponentItem;