import React, { createContext, useState } from 'react'
export const AuthContext = createContext() ;
export default function ContextProvider ({children}) {
   
  const [Toggle,setToggle] = useState(true) ;
  
  return (
    <AuthContext.Provider value={{Toggle,setToggle}}>
        {children}
    </AuthContext.Provider>
  )
}

