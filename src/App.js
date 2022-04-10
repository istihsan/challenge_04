import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Search from './pages/Search';
import DetailMobil from './pages/DetailMobil'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/DetailMobil/:id" element={<DetailMobil />}/>
        </Route> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
