import React, { Component } from 'react';
import './ReadMoreInfoText.css';

class ReadMoreInfoText extends Component {
    render() {
        return (
            <div className="Main">
                <div className="TextAndLight">
                    <div className="LigthSymbol"></div>
                    <div className="TextLight">трішки інформації</div>
                </div>
                <div className="InfoText">
                    <p style={{ marginTop: '10px', marginLeft: '7px', marginBottom: '40px' }}>
                        <span style={{ fontWeight: 'bold' }}> Тунель кохання</span> у Рівненській області - це зелений тунель довжиною 4 км, створений з переплетених дерев і кущів. Його також називають природним феноменом, оскільки він не зустрічається більше ніде в Україні. Саме тому селище Клевань використовують для рекламних роликів, популярних фільмів та різноманітних фотосесій.
                    </p>
                    <p style={{ marginLeft: '7px', marginBottom: '40px' }}>
                        <span style={{ fontWeight: 'bold' }}>Тільки уявіть, як магічно виглядає ця арка ідеальної форми, завдовжки в декілька кілометрів.</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default ReadMoreInfoText;
