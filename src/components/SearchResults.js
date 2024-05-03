import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {
    const navigate = useNavigate();

    useEffect(() => {
      
        if (searchResults && searchResults.length > 0) {
            const countryId = searchResults[0].cca3;
            navigate(`/${countryId}`);
        }
    }, [searchResults, navigate]);

    return (
        <div>
        </div>
    );
}

export default SearchResults;


