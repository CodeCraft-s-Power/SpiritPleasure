import React, { Component } from 'react';
import './Find.css'
import BottNavBar from "./BottNavBar";
import SideBar from "./SideBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import TopNavBar from "../HomeComponents/TopNavBar";
import FindComponentItem from "./FindComponentItem";
import CenterPart from "./CenterPart";
import { usePlace } from '../PlaceContext';

const Find = () => {
    const { places, originalPlaces } = usePlace();

return (
    <div>
        <TopNavBar/>
        <BottomNavBar />
        <div className="MainFind">
            <SideBar/>
            <CenterPart/>
            {/*<FindComponentItem/>*/}
        </div>

    </div>
);

}

export default Find;
