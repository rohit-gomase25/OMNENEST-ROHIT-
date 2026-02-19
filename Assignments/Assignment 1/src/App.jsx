import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<MainContent />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
