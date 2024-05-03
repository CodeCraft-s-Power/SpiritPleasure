import React from 'react';
import './ReadMoreInfoText.css';

function ReadMoreInfoText(props) {
    const { id, name, description } = props;

    return (
        <div className="Main" key={id}>
            <div className="TextAndLight">
                <div className="LigthSymbol"></div>
                <div className="TextLight"></div>
            </div>
            <div className="InfoText">
                <p style={{marginTop: '10px', marginLeft: '7px', marginBottom: '40px'}}>
                    <span style={{fontWeight: 'bold'}}> {name}</span>
                    <span> {description}</span>
                </p>
                {/*<p style={{marginLeft: '7px', marginBottom: '40px' }}>*/}
                {/*    <span style={{ fontWeight: 'bold' }}>Тільки уявіть, як магічно виглядає ця арка ідеальної форми, завдовжки в декілька кілометрів.</span>*/}
                {/*</p>*/}
            </div>
        </div>
    );
}

export default ReadMoreInfoText;