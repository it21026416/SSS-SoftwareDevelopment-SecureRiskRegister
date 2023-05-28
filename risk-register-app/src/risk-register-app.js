import React, { useContext, useEffect } from "react";
import "./sass/App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import View from "./pages/View";
import Contact from "./pages/Contact";
import DarkModeContext from "./context/DarkModeContext";
import { RiskProvider } from "./context/RiskContext";
import Login from "./components/SignInView";
import Register from "./components/RegisterView"

function App() {
	const { darkMode } = useContext(DarkModeContext);

	// Change Body Dark Mode Background
	useEffect(() => {
		document.body.className = darkMode === "light" ? "lightBody" : "darkBody";
	}, [darkMode]);

	return (
		<>
			<RiskProvider>
				<Navbar />
				<Routes>
					<Route
						exact path="/"
						element={localStorage.getItem("signedIn") ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
					>
					</Route>
					<Route exact path="/risk-register-app" element={<Navigate to="/" />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/view" element={<View />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</RiskProvider>
		</>
	);
}

export default App;
