
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import { lightTheme, darkTheme } from "./components/Theme";
import MainPage from "./components/MainPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
    const [theme, setTheme] = useState('light');

 
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
	
                <Nav theme={theme} setTheme={setTheme}/>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path="/:countryId" element={<CountryDetails/>} />
				</Routes>
            </>
        </ThemeProvider>
    );
}

export default App;