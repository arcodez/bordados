import React, { createContext } from 'react'

export const cartContext = createContext()

export const cartProvider = () => {

    const value = {}

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

