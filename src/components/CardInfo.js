import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardInfo = ({country}) => {
	const navigate = useNavigate();
	const handleCountryDetails= (countryId) => {
		navigate(`/${countryId}`)
	}

  return (
	<StyledCard onClick={() => handleCountryDetails(country.cca2)}>
		<img src={country.flags.png} alt={country.flags.alt}/>
		<StyledTextBox>
			
				<h2>{country.name.common}</h2>

		
			<p><strong>Population:</strong> {country.population}</p>
			<p><strong>Region:</strong> {country.region}</p>
			<p><strong>Capital:</strong> {country.capital}</p>
		</StyledTextBox>
	</StyledCard>
  )
}

export default CardInfo

const StyledCard = styled.div`
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
	width: 28vh;
	p {
		margin: 0.2rem;
	}
`;