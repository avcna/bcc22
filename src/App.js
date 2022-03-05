import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Klinik from './pages/Clinic';
import Articles from './pages/Articles';
import {useEffect, useState} from "react";

function App() {
return (
	<BrowserRouter>
	<div className='nav-div'>
	<Navbar />
	</div>
	<Routes>
		<Route path='/' exact element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
		<Route path='/Klinik' element={<Klinik/>} />
		<Route path='/Artikel' element={<Articles/>} />
		{/*<Route path='/Konsultasi' element={<Konsultasi/>} />*/}
	</Routes>
	</BrowserRouter>
);
}

export default App;
