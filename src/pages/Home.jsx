import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <h1>Welcome Home!</h1>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/myjob"}>My Job</Link>
        </>
    )
}

export default Home