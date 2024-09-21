import { createContext, useContext, useEffect, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => { 

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUSer] = useState("");

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);  //this is to remove continuous refreshment after login btn
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    // Logout Functionallity
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT Authentication - to get currently logged in user data 
    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok) {
                const data = await response.json(); 
                console.log("user data ", data.userData);    
                setUSer(data.userData);            
            }
        } catch(error) {
            console.log("Error Fetching User Data");
        }
    }

    useEffect( () => {
        userAuthentication()
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }} > 
            {children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    // useAuth Functoin now contains the value provided by the 
    // AuthContext.Provider higher up in the component tree

    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }

    return authContextValue;
};