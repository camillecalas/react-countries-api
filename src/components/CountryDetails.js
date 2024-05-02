import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const CountryDetails = () => {
	const {countryId} = useParams()
	console.log(countryId)
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
                    <h2>{country.name?.common}</h2>
                    <StyledTextBox>
                        <p><strong>Population:</strong> {country.population}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                    </StyledTextBox>
                </>
            )}
			</StyledCard>
		
  	)
}

export default CountryDetails

const StyledCard = styled.div`
	/* background-color: ${({ theme }) => theme.element}; */
	img {
		width: 30vh;
		height: 20vh;
	}
`;



const StyledTextBox= styled.div`
 	background-color: ${({ theme }) => theme.element};
	display: flex;
	flex-direction: column;
	padding-bottom: 3rem;
	padding-left: 1rem;
	p {
		margin: 0.2rem;
	}
`;