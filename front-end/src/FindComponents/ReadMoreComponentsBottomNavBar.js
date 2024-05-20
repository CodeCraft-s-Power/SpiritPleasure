import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './ReadMoreComponentBottomNavBar.css'
import {useUser} from "../UserContext";
import {usePlace} from "../PlaceContext";

const ReadMoreComponentsBottomNavBar = ({ place, onHistory }) =>  {

    const { id, name} = place;
    // console.log(`on history state: ${onHistory}`)
    const {userId} = useUser()
    const { fetchUserLiked, setLikedPlaces, LikedPlaces } = usePlace()

    const changeLikedState1 = async () => {
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

    return (
        <div key={id}>
            <ul className="ulnavbar3">
                <li id="li-text2">
                    <span className="custom-span1">Spirit Pleasure</span>
                    <br/>
                    <span className='custom-span2'> насолодись Україною</span>
                </li>
                {/*{onHistory ? (*/}
                {/*    <div>*/}
                {/*        <NavLink to={"/history"}>*/}
                {/*            <button className="CircleButton"></button>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <div>*/}
                {/*        <NavLink to={"/find"}>*/}
                {/*            <button className="CircleButton"></button>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*)}*/}
                <NavLink to={"/find"}>
                    <button className="CircleButton"></button>
                </NavLink>

                <div className="ItemNameContainer">{name}</div>
                <button className="HeartButton" onClick={changeLikedState1}></button>
            </ul>
        </div>
    );
}

export default ReadMoreComponentsBottomNavBar;