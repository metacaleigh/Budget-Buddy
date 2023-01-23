import React from 'react'
import CategoryFilter from './CategoryFilter'

function DateFilter() {
    return(
        <>
            <button className="date-filter-button">Today</button>
            <div className="divider"/>
            <button className="date-filter-button">This Week</button>
            <div className="divider"/>
            <button className="date-filter-button">This Month</button>
            <div className="divider"/>
        </>
    )
}

export default DateFilter