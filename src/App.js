
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import { lightTheme, darkTheme } from "./components/Theme";

function App() {
    const [theme, setTheme] = useState('light');

 

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <Nav theme={theme} setTheme={setTheme}/>
            </>
        </ThemeProvider>
    );
}

export default App;