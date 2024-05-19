import React, {Component} from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import FindComponentItem from "../FindComponents/FindComponentItem";
import {usePlace} from "../PlaceContext";

const Liked = () => {

    const { LikedPlaces } = usePlace();

    console.log(`LikedPlaces: ${LikedPlaces}`)
    return (
        <div>
            <TopNavBar/>
            <BottomNavBar/>
            <div>
                {LikedPlaces.map(place => (
                    <FindComponentItem
                        key={place.id}
                        place={place}
                        onHistory={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default Liked;