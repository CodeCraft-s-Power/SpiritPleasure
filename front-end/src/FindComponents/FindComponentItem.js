import React from 'react';
import { NavLink } from 'react-router-dom'; // Імпортуємо NavLink
import './FindComponentItem.css'; // Передбачується, що ви створили CSS-файл для цього компонента

function FindComponentItem(props) {
    return (
        <div>
            {/* Обертаємо кнопку в NavLink та вказуємо шлях до компонента, на який хочемо перейти */}
            <NavLink to="/read-more">
                <div className="FirstItem">
                    <button className="LikeButton"></button>
                </div>
            </NavLink>
            <div className="UnderItmeText">
                <span className="UnderItmeText1">Тунель кохання</span>
                <br />
                 <span className="UnderItemText2">с. Клевань</span>
            </div>
        </div>
    );
}

export default FindComponentItem;
