import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "../src/componenets/Header/Header.jsx"
import Home from "../src/pages/Home/Home.jsx"
import Papers from "../src/pages/Papers/Papers.jsx"
import Projects from "../src/pages/Projects/Projects.jsx"
import Study from "../src/pages/Study/Study.jsx"
import "./main.css"

function AppContent() {
    return (
        <Routes>
            <Route path="/BlogPage/" element={
                <Home/>
            }/>
            <Route path="/papers" element={
                <Papers/>
            }/>
            <Route path="/projects" element={
                <Projects/>
            }/>
            <Route path="/study" element={
                <Study/>
            }/>
        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    )
}

export default App
