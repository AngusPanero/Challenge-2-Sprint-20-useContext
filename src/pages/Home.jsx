import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useTheme } from "../themes/ThemeContext";
import profileImage from "../img/IMG_5679.jpg";
import "../../src/Routes.css"

const Home = () => {
    const { theme } = useTheme();
    const [linkClass, setLinkClass] = useState("");

    useEffect(() => {
        setLinkClass(theme === "light" ? "light-link" : "dark-link");
    }, [theme]);
    return(
        <>
            <img className="img-profile" src={profileImage} alt="Profile-Photo" />
            
            <h1>Welcome To My CV!</h1>
            <h2>Know My Professional Knowledge</h2>

            <div className="pages-links">
                <Link className={linkClass} to={"/profile"}>Profile</Link>
                <Link className={linkClass} to={"/myjob"}>My Job</Link>
            </div>
        </>
    )
}

export default Home