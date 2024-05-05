import React, { useEffect, useState } from 'react';
import "./CenterPart.css";
import FindComponentItem from "./FindComponentItem";
import ReadMoreInfoText from "./ReadMoreInfoText";

const CenterPart = () => {
    const [places, setPlaces] = useState([]);

    const fetchPlaceData = async () => {
        try {
            let data = await fetch('http://127.0.0.1:8000/places/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let placesData = await data.json();
            console.log(placesData)
            console.log("Succesfully fetched");
            setPlaces(placesData);
        } catch (error) {
            console.error('Error fetching place data:', error);
        }
    };

    useEffect(() => {
        fetchPlaceData();
    }, []);

    return (
        <div className="center-part1">
            {places.map(place => (
                <div key={place.id}>
                    <FindComponentItem
                        id={place.id}
                        name={place.name}
                        description={place.description}
                        city={place.city}
                        // Перевірка наявності зображення перед отриманням URL
                        image={place.images.length > 0 ? place.images[0].image : null}
                    />
                </div>
            ))}
        </div>
    );
};

export default CenterPart;