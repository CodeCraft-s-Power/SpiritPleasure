    import React from 'react';
    import { NavLink } from 'react-router-dom';
    import './FindComponentItem.css';
    import { useReadMore } from '../ReadMoreContext';
    import { useUser } from '../UserContext';

    const FindComponentItem = ({ place, onHistory }) => {
        const {id, name, images, location, description} = place;
        const {city} = location;
        const {userId} = useUser()

        const setReadMoreState = useReadMore();
        console.log(name, images)
        // Отримати функцію для зміни стану

        const histData = {
            user: userId,
            place: id,
            is_favorite: false
        }

        const addToHistory = async () => {
            try {
                // Отримати історію користувача
                const response = await fetch('http://127.0.0.1:8000/history/');
                if (!response.ok) {
                    throw new Error('Failed to fetch user history');
                }
                const historyData = await response.json();

                // Перевірити, чи місце вже є в історії
                const existsInHistory = historyData.some(entry => entry.user === userId && entry.place === id);
                if (existsInHistory) {
                    console.log("Place already exists in history!");
                    return;
                }

                // Додати місце до історії
                const addResponse = await fetch('http://127.0.0.1:8000/history/', {
                    method: 'POST',
                    body: JSON.stringify(histData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (addResponse.ok) {
                    console.log("Successfully added to history!")
                } else {
                    console.log("Failed to add place to history!");
                }
            } catch (error) {
                console.error(error);
            }
        };


        const handleClick = () => {
                setReadMoreState({
                    id: id,
                    name: name,
                    description: description
                });
                addToHistory()
            };

            return (
                <div key={id} onClick={handleClick}>
                    <NavLink to={`/read-more?onHistory=${onHistory}`}>
                        <div className="FirstItem" style={{backgroundImage: `url(${images[0].image})`}}>
                            <button className="LikeButton"></button>
                        </div>
                    </NavLink>
                    <div className="UnderItemText">
                        <span className="UnderItmeText">{name}</span>
                        <br/>
                        <span className="UnderItmeText1">{city}</span>
                    </div>
                </div>
            );
        };
    export default FindComponentItem;
