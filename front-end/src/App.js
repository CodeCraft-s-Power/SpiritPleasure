import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomeComponents/HomePage';
import Find from './FindComponents/Find';
import Login from './LoginComponents/Login';
import BottomNavBar from './HomeComponents/BottomNavBar';
import TopNavBar from "./HomeComponents/TopNavBar";
import Registration from "./Registration";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/find" element={<Find/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
