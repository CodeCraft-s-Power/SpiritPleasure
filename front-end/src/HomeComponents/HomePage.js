import React, { Component } from 'react';
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import MainImage from "./MainImage";
import BottomSide from "./BottomSide";
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>

                <TopNavBar/>
                <BottomNavBar/>
                <MainImage/>
                <BottomSide/>
            </div>
        );
    }
}

export default HomePage;