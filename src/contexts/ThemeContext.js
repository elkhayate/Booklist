import React, { createContext, useState} from 'react'


export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, ] = useState({
        dark : {syntax : "#ddd", bg : "#555"},
        light : {syntax : "black", bg : "#eee"}
    })
    const [isLight , setLight] = useState(false);

    const toggler = () => {
        setLight(!isLight)
    }
    return (
        <ThemeContext.Provider value ={{isLight, dark : theme.dark, light : theme.light, toggler}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;