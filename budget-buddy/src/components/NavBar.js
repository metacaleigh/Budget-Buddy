import React from 'react'

function NavBar({ NavLink }) {
    return(
        <div className="NavBar">
            <NavLink to="/" className="navbar-button">Home</NavLink>
            <div className="divider"/>
            <NavLink to="/aboutus" className="navbar-button">About Us</NavLink>
            <div className="divider"/> 
            <NavLink to="/spendingstats" className="navbar-button">Spending Stats</NavLink>
            <div className="divider"/>
            <NavLink to="/form-edit" className="navbar-button">Add Transaction</NavLink>
       </div>
    )
}

export default NavBar