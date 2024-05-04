import React, {useEffect, useState} from 'react';
import TopNavBar from "../HomeComponents/TopNavBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import ReadMoreComponentsBottomNavBar from "./ReadMoreComponentsBottomNavBar";
import ReadMoreMainPhoto from "./ReadMoreMainPhoto";
import ReadMoreInfoText from "./ReadMoreInfoText";

function ReadMoreComponent(props, id, name, description) {
    console.log("ReadMoreComponent props:", id, name, description)
    const [state, setState] = useState({ id, name, description });
    useEffect(() => {
        setState(state);
    }, []);



    return (
        <div key={state.id}>
            <TopNavBar/>
            <ReadMoreComponentsBottomNavBar/>
            <ReadMoreMainPhoto/>
            <ReadMoreInfoText
                id={state.id}
                name={state.name}
                description={state.description}
            />
        </div>
    );
}

export default ReadMoreComponent;