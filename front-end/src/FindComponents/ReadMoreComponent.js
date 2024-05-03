import React from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import ReadMoreComponentsBottomNavBar from "./ReadMoreComponentsBottomNavBar";
import ReadMoreMainPhoto from "./ReadMoreMainPhoto";
import ReadMoreInfoText from "./ReadMoreInfoText";

function ReadMoreComponent(props) {
    return (
        <div>
            <TopNavBar/>
            <ReadMoreComponentsBottomNavBar/>
            <ReadMoreMainPhoto/>
            <ReadMoreInfoText/>
        </div>
    );
}

export default ReadMoreComponent;