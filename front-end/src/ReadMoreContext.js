import React, { createContext, useContext, useState } from 'react';

export const ReadMoreContext = createContext();
export const ReadMoreProvider = ({ children }) => {
    const [readMoreState, setReadMoreState] = useState({
        id: null,
        name: '',
        description: ''
    });

    return (
        <ReadMoreContext.Provider value={{ readMoreState, setReadMoreState }}>
            {children}
        </ReadMoreContext.Provider>
    );
};

export const useReadMore = () => {
    return useContext(ReadMoreContext).setReadMoreState;
};
