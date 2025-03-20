import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useTheme } from "../themes/ThemeContext";
import "../../src/Routes.css"

const Home = () => {
    const { theme } = useTheme();
    const [linkClass, setLinkClass] = useState("");

    useEffect(() => {
        setLinkClass(theme === "light" ? "light-link" : "dark-link");
    }, [theme]);
    return(
        <>
            <h1>Welcome Home!</h1>
            
            <div className="pages-links">
                <Link to={"/profile"}>Profile</Link>
                <Link to={"/myjob"}>My Job</Link>
            </div>
        </>
    )
}

export default Home