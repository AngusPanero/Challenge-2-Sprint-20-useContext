import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useTheme } from "../themes/ThemeContext";
import "../../src/Routes.css"
import profileImage from "../img/IMG_5679.jpg";

const MyJob = () => {
    const { theme } = useTheme();
    const [linkClass, setLinkClass] = useState("");

    useEffect(() => {
        setLinkClass(theme === "light" ? "light-link" : "dark-link");
    }, [theme]);

    return(
        <>
            <img className="img-profile" src={profileImage} alt="Profile-Photo" />

            <h1><i>Full Stack Developing Portfolio</i></h1>
            
            <div className="pages-links">
                <Link className={linkClass} to={"/"}>Home</Link>
                <Link className={linkClass} to={"/profile"}>Profile</Link>
            </div>

            <div class="cv-text">
                <p>Visit My <a className="github" href="https://github.com/AngusPanero?tab=repositories" target="_blank">GitHub</a> Portfolio! 👋 I'm a <strong>Full Stack Developer</strong> passionate about building 
                <strong> efficient, scalable, and dynamic</strong> web applications.</p>
                <p><strong>🔹 Tech Stack:</strong> JavaScript, React, CSS, HTML, Node.js, SQL, NoSQL, API Development, CORS, and Deployment.</p>
                <p><strong>🔹 Constantly learning</strong> and improving my skills to tackle new challenges.</p>
                <p><strong>🔹 Passionate</strong> about writing <i>clean, maintainable code</i> and optimizing performance.</p>
                <p>Feel free to explore my projects, contribute, or reach out to collaborate! 🚀</p>
            </div>
        </>
    )
}

export default MyJob