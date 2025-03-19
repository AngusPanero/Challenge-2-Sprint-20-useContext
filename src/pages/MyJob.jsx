import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"

const MyJob = () => {
    return(
        <>
            <h1>Welcome To My My Job!</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
        </>
    )
}

export default MyJob