import React from 'react'

function Search({ search, setSearch }) {
    return(
        <>
            <input 
                id="search-input" 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search transactions by category or description..." />
        </>
    )
}

export default Search;