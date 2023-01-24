import React from 'react'

function NavBar({ NavLink }) {
    return(
        <div className="NavBar">
            <NavLink to="/" className="navbar-button">Home</NavLink>
            <div className="divider"/>
            <NavLink to="/about" className="navbar-button">About Us</NavLink>
            <div className="divider"/>
            <NavLink to="/transaction/new" className="navbar-button">Add Transaction</NavLink>
            <div className="divider"/>
            <NavLink to="/add-to-wallet" className="navbar-button">Add to Wallet</NavLink>
       </div>
    )
}

export default NavBar