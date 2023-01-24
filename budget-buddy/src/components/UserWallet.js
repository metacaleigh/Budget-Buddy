import React from "react"

function UserWallet({ balance }) {
    return(
        <div className="user-wallet">
            <h1 id="wallet-h2" className="wallet-content">Your Remaining Balance:</h1>
            <h1 id="wallet-balance" className="wallet-content">${balance}</h1>
        </div>
    )
}

export default UserWallet;