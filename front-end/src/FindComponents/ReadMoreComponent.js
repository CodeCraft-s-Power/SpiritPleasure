import React from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import ReadMoreComponentsBottomNavBar from "./ReadMoreComponentsBottomNavBar";

function ReadMoreComponent(props) {
    return (
        <div>
            <TopNavBar/>
            <ReadMoreComponentsBottomNavBar/>

        </div>
    );
}

export default ReadMoreComponent;