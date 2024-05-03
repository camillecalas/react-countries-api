import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//ICONES
import moon from '../img/moon-regular.svg';
import moon_solid from '../img/moon-solid.svg';


//STYLES
import styled from 'styled-components';


const Nav = ({theme, setTheme}) => {
	const navigate = useNavigate();
	const [moonIcon, setMoonIcon] = useState(<img src={moon_solid} style={{ width: '1rem' }} alt='moon-dark'/>)

	const handleHome = () => {
		navigate(`/`)
	}

	const themeToggler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
		setMoonIcon(theme === 'light' ? 
			<img src={moon} style={{ width: '1rem' }} alt='moon-light'/> 
			: <img src={moon_solid} style={{ width: '1rem' }} alt='moon-dark'/> 
		)
		console.log(moonIcon)
    };

	return (
		<StyledNav>
			<h2 onClick={() => handleHome()}>Where in the world</h2>
			<button onClick={themeToggler}> {moonIcon} </button>
		</StyledNav>
	)
}

export default Nav


const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.element};
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 5rem;

	button {
		border: none;
		background: transparent;
	}

	@media (max-width: 565px) {
		justify-content: space-around;
        padding: 0; /* Remove padding */
		width: 100%;
	}
	
`;