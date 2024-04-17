// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomeComponents/HomePage';
import Registration from "./Registration";
import Login from "./LoginComponents/Login";
import Find from "./FindComponents/Find";



function App() {
  return (
      <div>
        <Find/>
      </div>
  );
}

export default App;