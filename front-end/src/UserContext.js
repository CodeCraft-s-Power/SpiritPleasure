import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext(); // Експортуйте UserContext

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ userId, setUserId, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);