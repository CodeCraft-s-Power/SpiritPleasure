import React from 'react';
import { usePlace } from '../PlaceContext';
import FindComponentItem from "./FindComponentItem";
import "./CenterPart.css"

const CenterPart = () => {
    const places = usePlace();
    console.log(places)
    return (
        <div className="center-part1">
            {places.map(place => (
                <FindComponentItem
                    key={place.id}
                    place={place}
                />
            ))}
        </div>
    );
}

export default CenterPart;
