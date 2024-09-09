import React, { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const ContextProvider = ({ children }) => {
    
    const initializeState = () => {
        const savedAuthData = localStorage.getItem("authData");
        return savedAuthData ? JSON.parse(savedAuthData) : { isAuth: false, me: null };
    };

    const [state, setState] = useState(initializeState);

    useEffect(() => {

        localStorage.setItem("authData", JSON.stringify(state));
    }, [state]);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
