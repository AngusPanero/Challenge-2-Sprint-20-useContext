import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";

const RouterComponent = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="profile" element={<Profile/>}/>
                <Route path="myjob" element={<MyJob/>}/>
            </Routes>
        </Router>
    )
}

export default RouterComponent