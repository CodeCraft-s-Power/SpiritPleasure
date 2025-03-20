import React from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import FindComponentItem from "../FindComponents/FindComponentItem";
import { usePlace } from '../PlaceContext';

const History = () => {
    const { HistoryPlaces } = usePlace();

    console.log(HistoryPlaces)
    return (
        <div>
            <TopNavBar />
            <BottomNavBar />
            <div>
                {HistoryPlaces.map(place => (
                    <FindComponentItem
                        key={place.id}
                        place={place}
                        onHistory={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default History;
