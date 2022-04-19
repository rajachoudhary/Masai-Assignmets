import React, { createContext, useState } from 'react'

export const context = createContext()
export const ContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(true)
  return (
    <context.Provider value={{isAuth,setIsAuth}}>
        {children}
    </context.Provider>
  )
}
