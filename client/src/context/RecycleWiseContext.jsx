import { createContext, useContext, useState, useEffect } from "react";

const RecycleWiseContext = createContext();

export const RecycleWiseProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    useEffect(() => {
			const token = localStorage.getItem("token");
			setIsAuthenticated(!!token); // Set authentication status based on token
		}, []);

    // Add any other state or functions you want to provide to your components
    // For example, you might want to manage user authentication state, etc.
    // const [user, setUser] = useState(null);
    // const login = (userData) => setUser(userData);
    // const logout = () => setUser(null);
    // const isAuthenticated = !!user;
    // const isAdmin = user?.role === 'admin'; // Example of checking if the user is an admin

    const API_URL = import.meta.env.VITE_API_URL

    return (
        <RecycleWiseContext.Provider value={{ 
        isAuthenticated,
        // isAdmin,
        // login,
        // logout,
        // user,
        API_URL,
        // Add any other context values you want to provide here
         }}>
        {children}
        </RecycleWiseContext.Provider>

    );
}  

export const useRecycleWise = () => useContext(RecycleWiseContext);

