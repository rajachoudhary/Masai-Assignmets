import { createContext, useState } from "react";
import React from 'react'

export const context = createContext()

export const RegistrationContext = ({children}) => {
    const [userData,setUserData] = useState([])
    const [isFill,setIsFill] = useState(false)

  return (
    <context.Provider value={{userData,setUserData,isFill,setIsFill}}>{children}</context.Provider>
  )
}
