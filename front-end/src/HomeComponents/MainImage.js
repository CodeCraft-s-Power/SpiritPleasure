import React, { Component } from 'react';
import './MainInage.css';

class MainImage extends Component {
    render() {
        return (
            <div className="main-image-container">
                <div className="main-image">
                    <div className="main-image-text-container">
                        <div> <span className="main-image-text">Обери місце, до якого <br/> лежить душа</span></div>
                        <div className="logot"> SpiritPleasure</div>
                        <div className="logot-bott"> Насолодись Україною</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainImage;