import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useTheme } from "../themes/ThemeContext";
import "../../src/Routes.css"

const MyJob = () => {
    const { theme } = useTheme();
    const [linkClass, setLinkClass] = useState("");

    useEffect(() => {
        setLinkClass(theme === "light" ? "light-link" : "dark-link");
    }, [theme]);
    
    return(
        <>
            <h1>Welcome To My My Job!</h1>
            <div className="pages-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
            </div>
        </>
    )
}

export default MyJob