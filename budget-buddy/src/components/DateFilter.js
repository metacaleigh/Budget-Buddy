import React from 'react'
import CategoryFilter from './CategoryFilter'

function DateFilter({ handleTodayClick }) {
    
    return(
        <div id="date-filter-flex">
            <button onClick={handleTodayClick} className="date-filter-button">Today</button>
            <button className="date-filter-button">This Week</button>
            <button className="date-filter-button">This Month</button>
        </div>
    )
}

export default DateFilter