import React, { useState } from 'react';

function AddBalanceForm({ balance, onFormSubmit }) {

    const [walletFormData, setWalletFormData] = useState("")

    function handleFormChange(e) {
        setWalletFormData(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        onFormSubmit(walletFormData)
    }

    return(
        <>
            <form id="wallet-form-flex" onSubmit={handleFormSubmit}>
                <input 
                    type="number" 
                    placeholder="Add Balance to Wallet..."
                    onChange={handleFormChange}
                    value={walletFormData}
                    name="balance"
                >
                </input>
                <button type="submit">Add Balance to Wallet</button>

            </form>
        </>
    )
}

export default AddBalanceForm;