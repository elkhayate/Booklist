import React, { createContext, useState} from 'react'


export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, ] = useState({
        dark : {syntax : "#ddd", bg : "#555"},
        light : {syntax : "#555", bg : "#eee"}
    })
    const [lighte , setLight] = useState(true);

    const toggler = () => {
        setLight(!lighte)
    }
    return (
        <ThemeContext.Provider value ={{lighte, dark : theme.dark, light : theme.light, toggler}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;