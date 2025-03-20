import React, { useContext } from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import ReadMoreComponentsBottomNavBar from "./ReadMoreComponentsBottomNavBar";
import ReadMoreMainPhoto from "./ReadMoreMainPhoto";
import ReadMoreInfoText from "./ReadMoreInfoText";
import { ReadMoreContext } from '../ReadMoreContext';
import { useLocation } from 'react-router-dom';

const ReadMoreComponent = (  ) => {
    const { readMoreState } = useContext(ReadMoreContext);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const onHistory = params.get('onHistory')

    console.log(readMoreState);
    // console.log(`on history state: ${onHistory}`)
    return (
        <div>
            <TopNavBar/>
            <ReadMoreComponentsBottomNavBar place={readMoreState} onHistory={onHistory}/>
            <ReadMoreMainPhoto place={readMoreState}/>
            <ReadMoreInfoText place={readMoreState}
            />
        </div>
    );
}

export default ReadMoreComponent;
