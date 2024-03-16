import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Service from './Components/Service';

const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/'  element={<Home />}/>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/service'  element={<Service/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
