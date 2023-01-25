import React from 'react'
import CategoryFilter from './CategoryFilter'
import Moment from 'react-moment'
import moment from 'moment'

function DateFilter({ handleClick }) {

    
    
    return(
        <div id="date-filter-flex">
            <button name="Today" onClick={handleClick} className="date-filter-button">Today</button>
            <button name="This Week" onClick={handleClick} className="date-filter-button">This Week</button>
            <button name="This Month" onClick={handleClick} className="date-filter-button">This Month</button>
            <button name="All" onClick={handleClick} className="date-filter-button">All Time</button>
        </div>
    )
}

export default DateFilter