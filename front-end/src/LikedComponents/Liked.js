// Liked.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import FindComponentItem from '../FindComponents/FindComponentItem';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";

function Liked() {
    const { id } = useParams(); // Отримати id з параметрів шляху
    // Застосуйте логіку для відображення компонента FindComponentItem з використанням id

    return (
        <div>
           <TopNavBar/>
            <BottomNavBar/>
            <FindComponentItem id={id} />
        </div>
    );
}

export default Liked;
