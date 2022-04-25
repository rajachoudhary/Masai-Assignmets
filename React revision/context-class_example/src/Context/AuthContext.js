import React from 'react'
import { createContext } from "react";

export const context = createContext()

export const AuthContext = ({children}) => {
    const [isAuth,setIsAuth] = React.useState(false)
    // const [userDetail,setUserDetails] = React.useState([])
  return (
    <context.Provider value={{isAuth,setIsAuth}}>
        {children}
    </context.Provider>
  )
}
