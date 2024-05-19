import React from 'react';
import { usePlace } from '../PlaceContext';
import FindComponentItem from "./FindComponentItem";
import "./CenterPart.css"

const CenterPart = () => {
    const { places, shouldFilter, originalPlaces, setPlaces } = usePlace();

    let locations = [];

    console.log(`new places: ${places.length}`);

    if (!shouldFilter) {
        locations = originalPlaces.map(place => (
            <FindComponentItem
                key={place.id}
                place={place}
                onHistory={false}
            />
        ));
    } else {
        locations.length = 0
        if (locations.length === places.length + 1) {
            setPlaces(places.length = 0)
        }
        locations = places.map(place => (
            <FindComponentItem
                key={place.id}
                place={place}
                onHistory={false}
            />

        ));
    }

    return (
        <div className="center-part1">
            {locations}
        </div>
    );
}

export default CenterPart;
