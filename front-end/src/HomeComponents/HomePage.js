// HomePage.js
import React from 'react';
/* import { useTheme } from '../ThemeContext'; */
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import MainImage from "./MainImage";
import BottomSide from "./BottomSide";
import './HomePage.css';

function HomePage() {
   /* const { theme } = useTheme(); */

    return (
        <div /* className={`home-page ${theme}`} */>
            <TopNavBar />
            <BottomNavBar />
            <MainImage />
            <BottomSide />
        </div>
    );
}

export default HomePage;
