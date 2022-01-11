import React, { createContext } from 'react'

export const themeContext = createContext()

export const themeProvider = ({children}) => {

    const value = {

    }

    return (
        <themeContext.Provider value={}>
            {children}
        </themeContext.Provider>
    )
}

