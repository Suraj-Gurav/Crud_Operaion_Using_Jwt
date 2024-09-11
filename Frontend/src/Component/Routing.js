import React from 'react'
import Registration from './Registration';
import Home from "./Home";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/registration' element={<Registration/>} />
            <Route exact path='/Home' element={<Home/>} />
        </Routes>
    )
}

export default Routing