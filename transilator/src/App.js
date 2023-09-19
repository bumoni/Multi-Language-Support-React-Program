// src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LanguageSwitcher from './components/LanguageSwitcher';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import enTranslation from './i18n/en.json';
import hiTranslation from './i18n/hi.json';
import Nav from './components/Nav'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// Initialize i18next
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    
  },
  lng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
    <BrowserRouter>
       <Nav/>
       <div className='container'>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
         </Routes>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
