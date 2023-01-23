import React from 'react'
import Transactions from './Transactions'

function TransactionList({ transactions, handleDelete }) {
    const transactionItems = transactions.map((transaction, index) => {
        return <Transactions key={index} {...transaction} index={index} handleDelete={handleDelete}/> 
    })
    return(
        <>
            {transactionItems}
        </>
    )
}

export default TransactionList