import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from './UserContext';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {

    const { userId } = useUser();

    const [places, setPlaces] = useState([]);
    const [originalPlaces, setOriginalPlaces] = useState([]);
    const [shouldFilter, setShouldFilter] = useState(false);
    const [HistoryPlaces, setHistoryPlaces] = useState([]);
    const [LikedPlaces, setLikedPlaces] = useState([]);

    const fetchPlaces = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/places/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const placesData = await response.json();
                setOriginalPlaces(placesData);
                setPlaces(placesData);
            } else {
                console.log("Fetching data failed!");
            }
        } catch (error) {
            console.error('Error fetching place data:', error);
        }
    };

    const fetchUserHistory = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/history/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json(); // Розбираємо JSON відповідь
                let userPlacesHistory = data
                    .filter(place => place.user === userId)
                    .map(place => originalPlaces.find(p => p.id === place.place))
                    .filter(Boolean); // Видаляємо undefined елементи, якщо немає відповідності

                setHistoryPlaces(userPlacesHistory);
            }
        } catch (error) {
            console.error('Error fetching user history data:', error);
        }
    };

    const fetchUserLiked = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/history/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json(); // Розбираємо JSON відповідь
                let userPlacesLiked = data
                    .filter(place => place.user === userId)
                    .filter(place => place.is_favorite === true)
                    .map(place => originalPlaces.find(p => p.id === place.place))
                    .filter(Boolean); // Видаляємо undefined елементи, якщо немає відповідності

                setLikedPlaces(userPlacesLiked);
                console.log(LikedPlaces);
            }
        } catch (error) {
            console.error('Error fetching user liked data:', error);
        }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    useEffect(() => {
        fetchUserHistory();
    }, [userId]); // Додайте userId до списку залежностей

    useEffect(() => {
        fetchUserLiked();
    }, [userId]); // Додайте userId до списку залежностей

    return (
        <PlaceContext.Provider value={{ places, originalPlaces, shouldFilter, setShouldFilter, setPlaces, HistoryPlaces, fetchUserHistory, setHistoryPlaces, LikedPlaces, setLikedPlaces, fetchUserLiked }}>
            {children}
        </PlaceContext.Provider>
    );
};

export const usePlace = () => useContext(PlaceContext);
