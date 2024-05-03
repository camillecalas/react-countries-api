import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const CountryDetails = () => {
	const {countryId} = useParams()
	// const location = useLocation();
	// const countryId = location.pathname.substring(1);
	const navigate = useNavigate();

	const handleCountryDetails= (countryId) => {
		navigate(`/${countryId}`)
	}

	const handleHome = () => {
		navigate(`/`)
	}
	const [country, setCountry] = useState(null)

	useEffect(() => {
		const fetchCountryDetails = async() => {
			try {
				const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryId}`)
				console.log(response.data[0])
				setCountry(response.data[0])
			} catch (error) {
				console.log('Error fetching country details:', error);
			}
		}
		fetchCountryDetails()

	}, [countryId])
	
	return (
		<StyledCard>
			{country && ( 
				<>
					<img src={country.flags.png} alt={country.flags.alt}/>
					<StyledBigContainer>
						<h2>{country.name?.common}</h2>
						<StyledTextCountainer>
							<StyledTextBox>
								<p><strong>Native Name:</strong> {country.name?.nativeName?.official}</p>
								<p><strong>Population:</strong> {country.population}</p>
								<p><strong>Region:</strong> {country.region}</p>
								<p><strong>Sub Region:</strong> {country.subregion}</p>
								<p><strong>Capital:</strong> {country.capital}</p>
							</StyledTextBox>
							<StyledTextBox>
								<p><strong>Top Level Domain:</strong> {country.tld?.join(', ')}</p>
								<p><strong>Currencies:</strong> {country.currencies && Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>
								<p><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(', ')}</p>
							</StyledTextBox>
						</StyledTextCountainer>
						<p><strong>Border Countries:</strong> {country.borders && country.borders.map(border => {
							return (<button key={border} onClick={() => handleCountryDetails(border)}>{border}</button>)
						})}</p>
					</StyledBigContainer>
				</>
			)}
		</StyledCard>
  	)
}

export default CountryDetails



const StyledCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	gap: 5rem;
	margin-bottom: 2rem;

	p{
		margin: 0 !important;
		line-height: 1.5rem;
	}
	img {
		width: 40vh;
		height: 30vh;
	}

	@media (max-width: 995px) {
		flex-direction: column;
		img {
			margin-top: 2rem;
			width: 50vh;
			height: 40vh;
		}
	}	

	@media (max-width: 600px) {
		p, h2{padding-left: 2rem;}
		
		img {
			margin-left: 0rem;
			
		}
	}
	
`;


const StyledBigContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	
	button {
		border: none;
		padding: 0.5rem;
		margin-left: 1rem;
		margin-top: 2rem;
		background-color: ${({ theme }) => theme.element};
		color: ${({ theme }) => theme.text};
	}
	@media (max-width: 900px) {
		button {
			margin-top: 1rem;
		}
	}	
`

const StyledTextBox= styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 565px) {
		justify-content:center;
		padding-left: 0rem;
	}	
`;

const StyledTextCountainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5rem;

	@media (max-width: 565px) {
		flex-direction: column;
		justify-content:center;
		gap:0;

	}
`

