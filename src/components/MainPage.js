import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import CardInfo from './CardInfo';
import styled from 'styled-components';
import Search from './SearchBar';

const MainPage = ({handleSearch}) => {

	const europeUrl = `https://restcountries.com/v3.1/region/europe`
	const [countries, setCountries] = useState(null);


	
	useEffect(() => {	
		const fetchCountriesDetails = async () => {
			try {
				const response = await axios.get(europeUrl)
				console.log(response.data)
				setCountries(response.data)
			} catch (error) {
				console.log('Error fetching Countries detauls', error)
			}
		};
		fetchCountriesDetails();
	},[])

	return (
		<>
		<Search onSearch={handleSearch}/>
		<StyledCards>
			{countries && countries.map((country) => {
				return (
					<div
						key={country.cca2}>
						<CardInfo country={country}/>
					</div>
				)
			})}
		</StyledCards>
			</>
	)
}

export default MainPage

const StyledCards = styled.div`
	/* width: 100vh; */
	padding: 2rem 5rem;
	justify-content: space-between;
	display: flex;
	flex-wrap: wrap;
	
	gap: 3rem;

	@media (max-width: 675px) {
		flex-direction: column;
		align-items: center;
	}	
`;