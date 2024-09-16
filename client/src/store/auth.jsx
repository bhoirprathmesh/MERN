import { createContext, useContext, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => { 

    const [token, setToken] = useState(localStorage.getItem("token"));

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

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }} > 
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