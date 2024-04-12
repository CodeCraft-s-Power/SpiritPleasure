import React, { Component } from 'react';
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <BottomNavBar/>
            </div>
        );
    }
}

export default HomePage;