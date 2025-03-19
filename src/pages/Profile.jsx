import React from "react";
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Profile = () => {
    return(
        <>
            <h1>Welcome To My Profile!</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/myjob"}>My Job</Link>
        </>
    )
}

export default Profile