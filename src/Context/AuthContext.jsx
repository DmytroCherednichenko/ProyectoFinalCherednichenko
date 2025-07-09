import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    const login = (username) => {
        const token = `fake-token-${username}`
        localStorage.setItem('authToken', token);
        setCurrentUser(username);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};