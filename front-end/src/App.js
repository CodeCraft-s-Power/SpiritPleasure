import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomeComponents/HomePage';
import Find from './FindComponents/Find';
import Liked from './LikedComponents/Liked';
import History from './HistoryComponents/History';
import Login from './LoginComponents/Login';
import BottomNavBar from './HomeComponents/BottomNavBar';
import TopNavBar from "./HomeComponents/TopNavBar";
import { ThemeProvider } from './ThemeContext';
import ReadMoreComponent from "./FindComponents/ReadMoreComponent";
import Registration from "./Registration";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/find" element={<Find />} />
                        <Route path="/liked" element={<Liked />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/read-more" element={<ReadMoreComponent />}/>
                        <Route path="/registration" element={<Registration />}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
