import { useTheme } from "../themes/ThemeContext";

const ButtonComponent = () => {
    const { theme, changeTheme } = useTheme()
    
    return(
        <>
            <button className={theme} onClick={() => changeTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </>
    )
}

export default ButtonComponent