import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <nav style={{ textAlign: 'center', padding: '10px' }}>
                <Link to="/">Головна</Link> | <Link to="/about">Про нас</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;