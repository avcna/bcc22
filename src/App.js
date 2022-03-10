import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Klinik from './pages/Clinic';
import Articles from './pages/Articles';
import Konsultasi from './pages/Konsul';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {useEffect, useState} from "react";
import {AuthContext} from './config/Auth';

function App() {
	const isAnyToken = JSON.parse(localStorage.getItem('token'));
	const userId = JSON.parse(localStorage.getItem('id'));
	const [authToken, setAuthToken] = useState(isAnyToken);
	const [user, setUser] = useState(userId);

	const setAndGetTokens= (token,id) => {
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('id', JSON.stringify(id));
		setAuthToken(token);
		setUser(id);
	};
return (
	<AuthContext.Provider value={{authToken, setAndGetTokens,user}}>
	<BrowserRouter>
	<Routes>
		<Route path='/' exact element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
		<Route path='/Klinik' element={<Klinik/>} />
		<Route path='/Artikel' element={<Articles/>} />
		<Route path='/Login' element={<Login/>} />
		<Route path='/Signup' element={<Signup/>} />
		<Route path='/Konsultasi' element={<Konsultasi/>} />
	</Routes>
	</BrowserRouter>
	</AuthContext.Provider>
);
}

export default App;
