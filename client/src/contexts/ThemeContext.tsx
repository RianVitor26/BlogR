import { createContext, useState } from 'react'

interface IThemeContextProps{
    themeName: string,
    toggleTheme: () => {}
}

const ThemeContext = createContext<IThemeContextProps>()

export const ThemeProvider = () => {

    const [theme, setTheme] = useState('light')


    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeContext.Provider value={}>

        </ThemeContext.Provider>
    )
}