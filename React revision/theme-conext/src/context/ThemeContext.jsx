import React, { createContext, useState } from 'react'

 export const context  = createContext()
export const ThemeContext = ({children}) => {
  const [dark, setDark] = useState(false)
  return (
    <context.Provider value={{dark,setDark}}>
      {children}
    </context.Provider>
  )
}
