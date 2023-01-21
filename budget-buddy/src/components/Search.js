import React from 'react'

function Search({ search, setSearch }) {
    return(
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search transactions..." />
            <i id='magnifyGlass'>🔍</i>
        </>
    )
}

export default Search;