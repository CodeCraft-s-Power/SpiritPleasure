import React, { createContext, useState, useContext, useEffect } from 'react';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
    const [places, setPlaces] = useState([]);
    const [originalPlaces, setOriginalPlaces] = useState([]);
    const [shouldFilter, setShouldFilter] = useState(false);

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

    useEffect(() => {
        fetchPlaces()
    }, [])

    return (
        <PlaceContext.Provider value={{ places, originalPlaces, shouldFilter,  setShouldFilter, setPlaces}}>
            {children}
        </PlaceContext.Provider>
    );
};

export const usePlace = () => useContext(PlaceContext);
