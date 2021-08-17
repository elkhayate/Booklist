import React, { createContext, useState} from 'react'


export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState({
        isLightTheme : false,
        dark : {syntax : "#ddd", bg : "#555"},
        light : {syntax : "#555", bg : "#eee"}
    })
    const toggler = () => {
        setTheme(
            {isLightTheme : !theme.isLightTheme}
        )
    }
    return (
        <ThemeContext.Provider value ={{isLightTheme : theme.isLightTheme, dark : theme.dark, light : theme.light, toggler}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;