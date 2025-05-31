import React, { createContext, useState ,useContext} from 'react'
import Cookies from 'js-cookie';

export const AuthContext=createContext()

export const AuthProvider = ({children}) => {
    //getting the cookies and user data stored in the localStorage of the browser.
    const initialUserState =Cookies.get("jwt") || localStorage.getItem("LetsChat");

    //parse the user data and storing in state.

    const [authUser,setAuthUser]=useState(initialUserState ? JSON.parse(initialUserState) : undefined);
    
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
