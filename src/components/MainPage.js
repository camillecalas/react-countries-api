import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import CardInfo from './CardInfo';
import styled from 'styled-components';
import Search from './SearchBar';

const MainPage = ({handleSearch}) => {

	const europeUrl = `https://restcountries.com/v3.1/region/europe`
	const [countries, setCountries] = useState(null);
	const [selectedRegion, setSelectedRegion] = useState('europe');


	useEffect(() => {	
		const fetchCountriesDetails = async () => {
			try {
				const response = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
				console.log(response.data)
				setCountries(response.data)
			} catch (error) {
				console.log('Error fetching Countries detauls', error)
			}
		};
		fetchCountriesDetails();
	},[selectedRegion])

	const handleRegionChange = (e) => {
		setSelectedRegion(e.target.value);
	};


	return (
		<>
			<StyledContainer>
				<StyledComponent>
					<Search onSearch={handleSearch}/>
				</StyledComponent>
					<select name="selectedRegion" onChange={handleRegionChange} value={selectedRegion}>
						<option value="">Filter by region</option>
						<option value="africa">Africa</option>
						<option value="america">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
			</StyledContainer>
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

const StyledContainer = styled.div`
	padding: 2rem 5rem;
	display:flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap ;

	select{
		border: none;
		background-color: ${({ theme }) => theme.element};
		color: ${({ theme }) => theme.text};
		border: 2px solid #aaa;
		border-radius: 5px;
		outline: none;
		padding: 0.5rem 2rem; 
		box-sizing: border-box;
		transition: 0.3s;
	}
	@media (max-width: 675px) {
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		/* padding: 0rem; */
		/* width: 100%; */
	}	
`;

const StyledComponent = styled.div`
	/* padding: 2rem 5rem; */
	/* padding-top: 2rem; */
	@media (max-width: 675px) {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 0rem; */
		/* width: 100%; */
	}	
`;

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