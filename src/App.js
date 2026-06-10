import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <div className="bg-light min-vh-100 m-0 p-0">
      
      <NavigationBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}