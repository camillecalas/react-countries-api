import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
		font-family: "Nunito Sans", sans-serif;
        transition: all 0.50s linear;
    }
`;

export default GlobalStyles;