//Find.js
import React, { Component } from 'react';
import './Find.css'
import BottNavBar from "./BottNavBar";
import SideBar from "./SideBar";
import CenterPart from "./CenterPart";
import ButtonBar from "./ButtonBar";

class Find extends Component {
    render() {
        return (
            <div>
                <BottNavBar/>
                <div className="center">
                    <SideBar/>
                <CenterPart/>
                </div>
                <ButtonBar/>
            </div>
        );
    }
}

export default Find;