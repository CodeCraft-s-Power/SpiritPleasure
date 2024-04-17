import React, { Component } from 'react';
import './Find.css'
import BottNavBar from "./BottNavBar";
import SideBar from "./SideBar";

class Find extends Component {
    render() {
        return (
            <div>
                <BottNavBar/>
                <SideBar/>
            </div>
        );
    }
}

export default Find;