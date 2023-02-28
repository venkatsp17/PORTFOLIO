import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Project from './components/Project';
import About from './components/About';
import Skills from './components/Skills';
import Main from './Main';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
    </Routes>
  );
}

export default App;
