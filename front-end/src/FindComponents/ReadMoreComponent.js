import React, { useContext } from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import ReadMoreComponentsBottomNavBar from "./ReadMoreComponentsBottomNavBar";
import ReadMoreMainPhoto from "./ReadMoreMainPhoto";
import ReadMoreInfoText from "./ReadMoreInfoText";
import { ReadMoreContext } from '../ReadMoreContext';

const ReadMoreComponent = () => {
    const { readMoreState } = useContext(ReadMoreContext);

    console.log(readMoreState);

    return (
        <div>
            <TopNavBar/>
            <ReadMoreComponentsBottomNavBar place={readMoreState}/>
            <ReadMoreMainPhoto place={readMoreState}/>
            <ReadMoreInfoText place={readMoreState}
            />
        </div>
    );
}

export default ReadMoreComponent;
