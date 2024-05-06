import React from 'react';
import './ReadMoreInfoText.css';

const ReadMoreInfoText = ({ place }) => {

    const { id, name, description } = place;

    return (
        <div className="Main" key={id}>
            <div className="TextAndLight">
                <div className="LightSymbol"></div>
                <div className="TextLight"></div>
            </div>
            <div className="InfoText">
                <p style={{ marginTop: '10px', marginLeft: '7px', marginBottom: '40px' }}>
                    <span style={{ fontWeight: 'bold' }}> {name}</span>
                    <span> {description}</span>
                </p>
            </div>
        </div>
    );
}

export default ReadMoreInfoText;
