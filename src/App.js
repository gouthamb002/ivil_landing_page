import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Projects from './components/pages/Projects';
import JoinUs from './components/pages/JoinUs';
import Activities from './components/pages/Activities';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutus' exact element={<AboutUs />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/joinus' exact element={<JoinUs />} />
          <Route path='/activities' exact element={<Activities />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
