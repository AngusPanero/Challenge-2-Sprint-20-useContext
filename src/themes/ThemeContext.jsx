import React from "react";
import { createContext, useContext ,useState, useEffect } from "react";
import "../../src/Routes.css"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("dark")

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(`${theme}`);
        }, [theme]);

    return(
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }