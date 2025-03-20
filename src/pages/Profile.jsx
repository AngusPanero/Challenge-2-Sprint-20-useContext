import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useTheme } from "../themes/ThemeContext";
import profileImage from "../img/IMG_5679.jpg";
import "../../src/Routes.css"

const Profile = () => {
    const { theme } = useTheme();
    const [linkClass, setLinkClass] = useState("");

    useEffect(() => {
        setLinkClass(theme === "light" ? "light-link" : "dark-link");
    }, [theme]);

    return(
        <>
            <img className="img-profile" src={profileImage} alt="Profile-Photo" />

            <h1>Welcome To My Profile!</h1>

            <div className="pages-links">
                <Link className={linkClass} to={"/"}>Home</Link>
                <Link className={linkClass} to={"/myjob"}>My Job</Link>
            </div>

            <p className="cv-text"><strong className="strong-text">Gonzalo Agustín Panero | <i>Full Stack Developer</i>.</strong><br></br>
                I am a Full Stack Developer, 28 years old, born in Argentina and currently residing in Valencia, Spain. 
                My focus is on creating efficient and scalable web applications, combining both frontend and backend development. 
                I have solid knowledge in JavaScript, React, CSS, HTML, Node.js, SQL, and NoSQL, 
                as well as experience in deploying applications, managing CORS, and creating APIs. I am passionate about technology and enjoy 
                facing new challenges that allow me to continue growing as a professional. 
                I am seeking opportunities where I can contribute my skills and continue to develop in a dynamic and innovative environment.
            </p>
            
        </>
    )
}

export default Profile