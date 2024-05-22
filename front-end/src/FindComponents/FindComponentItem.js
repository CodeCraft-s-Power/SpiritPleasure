    import React from 'react';
    import { NavLink } from 'react-router-dom';
    import './FindComponentItem.css';
    import { useReadMore } from '../ReadMoreContext';
    import { useUser } from '../UserContext';
    import { usePlace } from '../PlaceContext'

    const FindComponentItem = ({ place, onHistory }) => {
        const {id, name, images, location, description} = place;
        const {city} = location;
        const {userId} = useUser()
        const { fetchUserLiked, setLikedPlaces, LikedPlaces } = usePlace();

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

        const changeLikedState = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/history/');
                if (!response.ok) {
                    throw new Error('Failed to fetch user history');
                }
                const historyData = await response.json();

                const entry = historyData.find(entry => entry.user === userId && entry.place === id);
                if (!entry) {
                    console.log("Entry not found in history!");
                    return;
                }

                const updatedEntry = {
                    ...entry,
                    is_favorite: !entry.is_favorite
                };

                const updateResponse = await fetch(`http://127.0.0.1:8000/history/${entry.id}/`, {
                    method: 'PUT',
                    body: JSON.stringify(updatedEntry),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (updateResponse.ok) {
                    console.log("Successfully updated liked state!");

                    // Оновлюємо стан LikedPlaces
                    if (!updatedEntry.is_favorite) {
                        setLikedPlaces(LikedPlaces.filter(place => place.id !== id));
                    } else {
                        fetchUserLiked();
                    }
                } else {
                    console.log("Failed to update the liked state!");
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
                <div key={id}>
                    <NavLink to={`/read-more?onHistory=${onHistory}`}>
                        <div className="FirstItem" onClick={handleClick}
                             style={{backgroundImage: `url(${images[0].image})`}}>
                            <button className="LikeButton" onClick={changeLikedState}></button>
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
