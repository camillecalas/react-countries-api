import React, { useState } from 'react';
import styled from 'styled-components'


function Search({ onSearch }) {

 	const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
	setQuery(event.target.value);
    onSearch(query);
	setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
     	 <StyledInput
			type="text"
			value={query}
			onChange={handleChange}
			placeholder="Search for a country..."
      	/>
      {/* <button type="submit">Search</button> */}
    </form>
  );
}

export default Search;


const StyledInput = styled.input`
	/* width: 50%; */
	/* margin: 8px 0; */
	background-color: ${({ theme }) => theme.element};
	color: ${({ theme }) => theme.text};
	border: 2px solid #aaa;
	border-radius: 5px;
	outline: none;
	padding: 0.5rem 2rem; 
	box-sizing: border-box;
	transition: 0.3s;
	cursor: pointer;

	input:focus {
    outline:none;

	@media (max-width: 400px) {
		width: 100%;
	}	
}
`;
