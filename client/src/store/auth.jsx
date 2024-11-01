
import { createContext, useContext, useEffect, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({children}) => { 

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUSer] = useState("");
    const[ isLoading, setIsLoading ] = useState(true);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URI_API;

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
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`, {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok) {
                const data = await response.json(); 
                console.log("user data ", data.userData);    
                setUSer(data.userData); 
                setIsLoading(false);           
            }else{
                console.log("Error Fetching User Data");
                setIsLoading(false);  
            }
        } catch(error) {
            console.log("Error Fetching User Data");
        }
    }

    // to fetch the services from the database
    const getServices = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`,{
                method: 'GET',
            });

            if(response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch(error) {
            console.log(`services frontened error : ${error}`);
        }
    }

    useEffect( () => {
        getServices();
        userAuthentication()
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, API }} > 
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