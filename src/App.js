
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import { lightTheme, darkTheme } from "./components/Theme";
import MainPage from "./components/MainPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";
import SearchResults from "./components/SearchResults";

function App() {
    const [theme, setTheme] = useState('light');

	const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${query}?fullText=true`
				// `https://restcountries.com/v3.1/name/${query}`
            );
			console.log(response.data)
            setSearchResults(response.data);
            // Naviguer vers une nouvelle URL pour afficher les résultats de recherche
            navigate("/search-results");
        } catch (error) {
            console.error("Error searching:", error);
        }
    };


 
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
	
                <Nav theme={theme} setTheme={setTheme}/>
				<Routes>
					<Route path='/' element={<MainPage handleSearch={handleSearch}/>}/>
					<Route
                    path="/search-results"
                    element={<SearchResults searchResults={searchResults} />}
                />
					<Route path="/:countryId" element={<CountryDetails/>} />
				</Routes>
            </>
        </ThemeProvider>
    );
}

export default App;