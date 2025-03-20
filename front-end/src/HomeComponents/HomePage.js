// HomePage.js
import React from 'react';
/* import { useTheme } from '../ThemeContext'; */
import { useUser } from '../UserContext';
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import MainImage from "./MainImage";
import BottomSide from "./BottomSide";
import './HomePage.css';

function HomePage() {
   /* const { theme } = useTheme(); */
    const { user } = useUser()
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
