import React, { Component } from 'react';
import './Find.css'
import BottNavBar from "./BottNavBar";
import SideBar from "./SideBar";
import BottomNavBar from "../HomeComponents/BottomNavBar";
import TopNavBar from "../HomeComponents/TopNavBar";

class Find extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <BottomNavBar />
                <SideBar/>
            </div>
        );
    }
}

export default Find;