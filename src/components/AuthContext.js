import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    const updateUser = (updatedData) => {
        const updatedUser = { ...user, ...updatedData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};
