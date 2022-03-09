import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Klinik from './pages/Clinic';
import Articles from './pages/Articles';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {useEffect, useState} from "react";

function App() {
return (
	<BrowserRouter>
	<Routes>
		<Route path='/' exact element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
		<Route path='/Klinik' element={<Klinik/>} />
		<Route path='/Artikel' element={<Articles/>} />
		<Route path='/Login' element={<Login/>} />
		<Route path='/Signup' element={<Signup/>} />
		{/*<Route path='/Konsultasi' element={<Konsultasi/>} />*/}
	</Routes>
	</BrowserRouter>
);
}

export default App;
