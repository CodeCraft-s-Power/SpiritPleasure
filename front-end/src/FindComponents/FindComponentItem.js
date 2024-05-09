import React from 'react';
import { Link } from 'react-router-dom';
import './FindComponentItem.css';
import { useReadMore } from '../ReadMoreContext';

const FindComponentItem = ({ place }) => {
    const { id, name, images, location, description } = place;
    const { city } = location;

    const setReadMoreState = useReadMore();
    console.log(images)
     // Отримати функцію для зміни стану


    const handleClick = () => {
        setReadMoreState({
            id: id,
            name: name,
            description: description
        });
    };

    return (
        <div key={id} onClick={handleClick}>
            <Link to={"/read-more"}>
                <div className="FirstItem" style={{backgroundImage: `url(${images[0].image})`}}>
                    <button className="LikeButton"></button>
                </div>
            </Link>
            <div className="UnderItemText">
            <span className="UnderItmeText">{name}</span>
                <br/>
                <span className="UnderItmeText1">{city}</span>
            </div>
        </div>
    );
};

export default FindComponentItem;
