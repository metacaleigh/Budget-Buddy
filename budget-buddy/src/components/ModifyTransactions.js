import React from "react"
import NewTransactionForm from "./NewTransactionForm"

function ModifyTransactions ({ transactions, setTransactions, baseUrl}) {

    function onFormSubmit(newTransaction) {
        const newTransactionBody = {
            ...newTransaction,
            amount: Number.parseFloat(newTransaction.amount).toFixed(2)
        }
    
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTransactionBody)
        })
            .then(res => res.json())
            .then(setTransactions([...transactions, newTransaction]))
    }

    return(
        <div>
            <NewTransactionForm onFormSubmit={onFormSubmit}/>
        </div>
    )
}

export default ModifyTransactions