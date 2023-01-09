import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

import CarList from "./component/Cars";
import StudentList from "./component/Students";

function App() {


    return (
        <>
            <Router>
            <header className="navbar">
                <NavLink to="/">liste des voitures</NavLink>
                <NavLink to="/students">Liste des élèves</NavLink>
            </header>
                <Routes>
                    <Route path="/" element={<CarList/>}/>
                    <Route path="/students" element={<StudentList/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;