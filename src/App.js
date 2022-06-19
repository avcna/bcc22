import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Klinik from "./pages/Clinic";
import Articles from "./pages/Articles";
import Konsultasi from "./pages/Konsultasi";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import { AuthContext } from "./config/Auth";
import { PrivateRoute, RestrictedRoute } from "./config/PrivateRoute";

function App() {
  const isAnyToken = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("id"));
  const [authToken, setAuthToken] = useState(isAnyToken);
  const [user, setUser] = useState(userId);

  const setAndGetTokens = (token, id) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id", JSON.stringify(id));
    setAuthToken(token);
    setUser(id);
  };
  return (
    <AuthContext.Provider value={{ authToken, setAndGetTokens, user }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Klinik" element={<Klinik />} />
          <Route path="/Artikel" element={<Articles />} />
          <Route
            path="/Login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="/Signup"
            element={
              <RestrictedRoute>
                <Signup />
              </RestrictedRoute>
            }
          />
          <Route
            path="/Konsultasi"
            element={
              <PrivateRoute>
                <Konsultasi />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
