import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import CountryDetails from "./CountryDetails";


function SearchResults({ searchResults }) {
    const navigate = useNavigate();


    const handleCountryClick = (countryId) => {
        navigate(`/${countryId}`);
	
    };

   useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            navigate(`/${searchResults[0].cca3}`);
        }
    }, [searchResults, navigate]);

    return (
        <StyledSearchList>
            {searchResults && searchResults.length > 0 ? (
                searchResults.map((country) => (
                    <StyledCountryCard
                        key={country.id}
                        onClick={() => handleCountryClick(country.cca3)}
                    >
                        <img
                            src={country.flags?.png || ''}
                            alt={country.name?.common || ''}
                        />
                        <p>{country.name?.common}</p>
                    </StyledCountryCard>
                ))
            ) : (
                <p>No search results found</p>
            )}
            <CountryDetails />
        </StyledSearchList>
    );
}

export default SearchResults;




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import CountryDetails from "./CountryDetails";

// function SearchResults({ searchResults }) {
//     const navigate = useNavigate();

//     const handleCountryDetails = (countryId) => {
// 		console.log(searchResults)
//         navigate(`/${countryId}`);
//     };

//     return (
//         <StyledSearchList>
//             <h2>Search Results</h2>
		
// 			{handleCountryDetails(country.cca3)}
                



//             {/* {searchResults && searchResults.length > 0 ? (
// 				searchResults.map((country) => (
// 					<StyledCountryCard
// 					key={country.id}
// 					onClick={() => handleCountryDetails(country.cca3)}
//                     >
//                         <img
//                             src={country.flags?.png || ''} // Assurez-vous que la propriété flags existe
//                             alt={country.name?.common || ''}
// 							/>
//                         <p>{country.name?.common}</p>
//                     </StyledCountryCard>
//                 ))
//             ) : (
// 				<p>No search results found</p>
//             )} */}
// 			<CountryDetails/>
//         </StyledSearchList>
//     );
// }

// export default SearchResults;

const StyledSearchList = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem;
    color: ${({ theme }) => theme.text};
`;

const StyledCountryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    padding: 1rem;
    width: 200px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 100px;
        height: 60px;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
    }
`;
